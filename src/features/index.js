import { lazy } from "react";

const Product = lazy(() => import("./Product/pages"));
const ProductDetail = lazy(() => import("./ProductDetail/pages/index"));
const UserRouter = [
  {
    path: "/",
    element: <Product />,
    private: true,
  },
  {
    path: "products/:id",
    element: <ProductDetail />,
    private: false,
  },
];

export default UserRouter;
