import { createAsyncThunk } from "@reduxjs/toolkit";
import UploadApi from "../../apis/Api__Upload";
export const UploadImgsProduct = createAsyncThunk(
  "UploadImgsProduct",
  async (body) => {
    try {
      const response = await UploadApi.UploadImgsProduct(body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const DestroyImgsProduct = createAsyncThunk(
  "DestroyImgsProduct",
  async (body) => {
    try {
      const response = await UploadApi.DestroyImgsProduct(body);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
