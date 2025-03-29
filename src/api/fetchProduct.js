import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config";
const apiurl = config.API_URL;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${apiurl}api/products`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products: ' + error.message);
    }
  }
);
