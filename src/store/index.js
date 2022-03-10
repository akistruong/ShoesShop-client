import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Product/ProductSlice";
import AuthSlice from "../features/Auth/AuthSlice";
import UploadSlice from "../features/Upload/UploadSlice";
const rootReducer = {
  Product: ProductSlice,
  Auth: AuthSlice,
  Upload: UploadSlice,
};
const Store = configureStore({
  reducer: rootReducer,
});
export default Store;
