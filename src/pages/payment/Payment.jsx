import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./payment.css";
import PaymentHeader from "../../components/header/PaymentHeader";
import CourseSummary from "../../components/course/CourseSummary";
import OrderSummary from "../payment-methods/component/OrderSummary";
import logoBCA from "../../assets/logo-bca.png";

dayjs.extend(dayjs_plugin_duration);

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {};

  const [countdown, setCountdown] = useState(null);

  const element = document.getElementById("countdown");

  useEffect(() => {
    const savedTargetTime = localStorage.getItem("targetTime");
    let targetTime;

    if (savedTargetTime) {
      targetTime = dayjs(savedTargetTime);
    } else {
      targetTime = dayjs().add(1, "day");
      localStorage.setItem("targetTime", targetTime.toString());
    }

    const interval = setInterval(() => {
      const now = dayjs();
      const diff = targetTime.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown("Countdown Complete!");
        localStorage.removeItem("targetTime");
        return;
      }

      const duration = dayjs.duration(diff);
      setCountdown({
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!course) {
    return <div>No course data available</div>;
  }

  const handleProceedToPayment = () => {
    navigate("ubah-metode", { state: { course } });
  };

  const handleToOrderPage = () => {
    navigate("selesai", { state: { course } });
  };

  const [copied, setCopied] = useState(false);
  const textToCopy = "11739 081234567890";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const btnBuyCourse = document.querySelectorAll(".btn-buy-course");
  btnBuyCourse.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.course);
    });
  });

  return (
    <>
      <PaymentHeader />
      <p
        id="countdown"
        className="bg-warning-subtle text-center text-secondary fw-semibold py-3"
      >
        {countdown
          ? countdown === "Countdown Complete!"
            ? countdown
            : `Selesaikan pemesanan dalam ${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`
          : "Sedang memuat..."}
      </p>
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <div className="column bg-white border rounded-3 p-4">
              <p className="fs-5 text-black fw-semibold">Metode Pembayaran</p>
              <div className="border rounded-2 py-4 d-flex align-items-center d-flex flex-column gap-2">
                <img src={logoBCA} className="logo" alt="logo BCA" />
                <p className="text-dark fs-6 fw-medium m-0">
                  Bayar Melalui Virtual Account BCA
                </p>
                <div className="d-flex flex-row gap-3">
                  <p className="text-secondary fs-6 fw-semibold m-0">
                    {textToCopy}
                  </p>
                  <p
                    className="text-danger fs-6 fw-medium m-0 cursor"
                    onClick={handleCopy}
                  >
                    {copied ? "Tersalin!" : "Salin"}
                  </p>
                </div>
              </div>
              <OrderSummary
                course={course}
                button={
                  <div className="d-flex flex-row justify-content-between gap-4">
                    <button
                      className="btn-second w-100 p-2 rounded-3 fw-semibold"
                      onClick={handleProceedToPayment}
                    >
                      Ganti Metode Pembayaran
                    </button>
                    <button
                      className="btn-first w-100 p-2 rounded-3 fw-semibold btn-buy-course"
                      onClick={handleToOrderPage}
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                }
              />
            </div>
          </div>
          <CourseSummary
            course={course}
            courseImage={<img src={course.image} className="w-100 mb-3" />}
            className="col-lg-5"
          />
        </div>
      </div>
    </>
  );
};

export default Payment;
