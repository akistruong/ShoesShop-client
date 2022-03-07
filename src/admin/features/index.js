import { lazy } from "react";

const ProductDashbroad = lazy(() =>
  import("./ProductDashbroad/pages/ProductDashbroad")
);
const MainDashbroad = lazy(() => import("./MainDashbroad/pages/MainDashbroad"));
const LoginAdmin = lazy(() => import("../components/Login/index"));
const AdminRouter = [
  {
    path: "/admin-login",
    element: <LoginAdmin />,
    private: false,
  },
  {
    path: "/admin-dashbroad",
    element: <MainDashbroad />,
    private: false,
  },
  {
    path: "/admin-productDashbroad",
    element: <ProductDashbroad />,
    private: false,
  },
];

export default AdminRouter;
