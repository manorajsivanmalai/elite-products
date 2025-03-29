// src/redux/wishlist/wishlistThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';
const api=config.API_URL;
export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchWishlist',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/api/wishlist/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
