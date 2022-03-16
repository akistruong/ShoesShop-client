import { createSlice } from "@reduxjs/toolkit";
import * as UploadApiSlice from "./UploadSliceApi";

const UploadSlice = createSlice({
  name: "UploadSlice",
  initialState: {
    isLoading: false,
    imgs: [],
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    UploadImgsProduct(state, action) {
      console.log(action.payload);
      state.imgs = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(UploadApiSlice.UploadImgsProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      UploadApiSlice.UploadImgsProduct.fulfilled,
      (state, action) => {
        console.log(action.payload.Files);
        state.isLoading = false;
        state.imgs = action.payload.Files;
      }
    );
    builder.addCase(UploadApiSlice.DestroyImgsProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      UploadApiSlice.DestroyImgsProduct.fulfilled,
      (state, action) => {
        if (action.payload.imgsRemain) {
          console.log("EDIT", action.payload.imgsRemain);
          state.imgs = action.payload.imgsRemain;
        } else {
          console.log("NOEDIT", state.imgs, action.payload);
          state.imgs = state.imgs.filter((item) => {
            console.log({ item });
            return item.public_id != action.payload.id;
          });
        }
        state.isLoading = false;
      }
    );
  },
});
export const { setLoading, UploadImgsProduct } = UploadSlice.actions;
export default UploadSlice.reducer;
