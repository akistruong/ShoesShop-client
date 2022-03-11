import { createSlice } from "@reduxjs/toolkit";
import * as UploadApiSlice from "./UploadSliceApi";

const UploadSlice = createSlice({
  name: "UploadSlice",
  initialState: {
    isLoading: false,
    imgs: [
      {
        url: "",
        public_id: "",
      },
    ],
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(UploadApiSlice.UploadImgsProduct.pending, (state) => {
      state.img.isLoading = true;
    });
    builder.addCase(
      UploadApiSlice.UploadImgsProduct.fulfilled,
      (state, action) => {
        console.log(action.payload.Files);
        state.img.isLoading = true;
        state.imgs = action.payload.Files;
      }
    );
    builder.addCase(
      UploadApiSlice.DestroyImgsProduct.fulfilled,
      (state, action) => {
        state.imgs.splice(action.payload, 1);
      }
    );
  },
});
export const { UploadImg } = UploadSlice.actions;
export default UploadSlice.reducer;
