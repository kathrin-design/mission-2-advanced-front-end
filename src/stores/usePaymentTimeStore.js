import { create } from "zustand";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { persist } from "zustand/middleware";

dayjs.extend(duration);

const usePaymentTime = create(
  persist((set, get) => ({
    paymentTime: null,
    targetTime: null,
    intervalId: null,
    saveTimeToLocalStorage: () => {
      let targetTime;

      const savedTargetTime = localStorage.getItem("targetTime");

      if (savedTargetTime) {
        targetTime = dayjs(savedTargetTime);
      } else {
        const paymentDate = dayjs().add(1, "day");
        targetTime = paymentDate;
        localStorage.setItem("targetTime", targetTime.toISOString());
      }

      set({ targetTime });

      if (get().intervalId) {
        clearInterval(get().intervalId);
      }

      const interval = setInterval(() => {
        const now = dayjs();
        const diff = targetTime.diff(now);

        if (diff <= 0) {
          clearInterval(interval);
          set({ paymentTime: "Payment Times Up!", intervalId: null });
          localStorage.removeItem("targetTime");
          return;
        }

        const duration = dayjs.duration(diff);
        set({
          paymentTime: {
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
          },
        });
      }, 1000);

      set({ intervalId: interval });
    },
    clearPaymentTime: () => {
      const intervalId = get().intervalId;
      if (intervalId) {
        clearInterval(intervalId);
        set({ intervalId: null });
      }
      localStorage.removeItem("targetTime");
      set({ paymentTime: null, targetTime: null });
    },
  }))
);

export default usePaymentTime;
