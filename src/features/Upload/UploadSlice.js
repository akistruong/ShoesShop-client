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
        state.imgs = state.imgs.filter(
          (item) => item.public_id != action.payload.id
        );

        state.isLoading = false;
      }
    );
  },
});
export const { setLoading } = UploadSlice.actions;
export default UploadSlice.reducer;
