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
  },
  {
    path: "/admin-dashbroad",
    element: <MainDashbroad />,
  },
  {
    path: "/admin-productDashbroad",
    element: <ProductDashbroad />,
  },
];

export default AdminRouter;
