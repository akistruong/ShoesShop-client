import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Product/ProductSlice";
import AuthSlice from "../features/Auth/AuthSlice";
const rootReducer = {
  Product: ProductSlice,
  Auth: AuthSlice,
};
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
