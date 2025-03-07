// src/redux/wishlist/wishlistThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const api="http://localhost:5000"
export const fetchaddtoCard = createAsyncThunk(
  'addtocard/fetchaddtocard',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/api/addtocart/${userId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
