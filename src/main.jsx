import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store, persistor } from "./store/redux/store.js";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Products from "./pages/products/Products.jsx";
import ProductDetail from "./pages/product-detail/ProductDetail.jsx";
import PaymentMethods from "./pages/payment-methods/PaymentMethods.jsx";
import Payment from "./pages/payment/Payment.jsx";
import ChangePaymentMethod from "./pages/ChangePaymentMethod.jsx";
import Video from "./pages/video/Video.jsx";
import Class from "./pages/class/Class.jsx";
import Order from "./pages/order/Order.jsx";
import PaymentSuccessful from "./pages/PaymentSuccessful.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
        element: <ProtectedRoute />,
        children: [{ index: true, element: <Profile /> }],
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
        element: <Products />,
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
