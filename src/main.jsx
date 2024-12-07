import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import AllProducts from "./pages/all-product/AllProducts.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import PaymentMethods from "./pages/payment-methods/PaymentMethods.jsx";
import Payment from "./pages/payment/Payment.jsx";
import ChangePaymentMethod from "./pages/ChangePaymentMethod.jsx";
import Video from "./pages/video/Video.jsx";
import Class from "./pages/class/Class.jsx";
import Order from "./pages/order/Order.jsx";
import PaymentSuccessful from "./pages/PaymentSuccessful.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "class",
        children: [
          {
            index: true,
            element: <Class />,
          },
          {
            path: "video",
            element: <Video />,
          },
        ],
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "kategori",
        element: <AllProducts />,
      },
      {
        path: "detail-produk",
        children: [
          {
            index: true,
            element: <ProductDetail />,
          },
          {
            path: "video",
            element: <Video />,
          },
          {
            path: "metode-pembayaran",
            children: [
              {
                index: true,
                element: <PaymentMethods />,
              },
              {
                path: "pembayaran",
                children: [
                  {
                    index: true,
                    element: <Payment />,
                  },
                  {
                    path: "selesai",
                    element: <PaymentSuccessful />,
                  },
                  {
                    path: "ubah-metode",
                    children: [
                      {
                        index: true,
                        element: <ChangePaymentMethod />,
                      },
                      {
                        path: "selesai",
                        element: <PaymentSuccessful />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
