import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Product/ProductSlice";
const rootReducer = {
  Product: ProductSlice,
};
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
