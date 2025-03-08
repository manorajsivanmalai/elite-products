import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/fetchProduct';
import shampoo1 from "../../assets/images/shampoo/shampoo-1.png";
import shampoo from "../../assets/images/shampoo/shampo.png";
import bahubali1 from "../../assets/images/bahubali/Bhahubali_100ML_3D-removebg-preview (1).png"
import  bahubali2 from "../../assets/images/bahubali/intimate-mist.png";
import  foam1 from  "../../assets/images/bahubali/foam-2.jpg";
import foam2 from "../../assets/images/bahubali/foam-1.png";
import fc1 from "../../assets/images/facewash/fc-1.jpg";
import fc2 from "../../assets/images/facewash/fc-2.png";
import fc3 from "../../assets/images/facewash/fc-3.png";
const initialState = {
  products:[
    {
      "id": 4,
      "images": [
        shampoo1,
        shampoo
      ],
      "title": "Chanakya Care Shampoo",
      "description": "Let Kids be champions with the right Shampoo because strong hair, healthy scalps and confidence start at an early age.",
      "price": "691.00",
      "old_price": "730.00",
      "created_at": "2025-03-04T04:20:48.294Z",
      "name": "Chanakya Care Shampoo"
    },
    {
      "id": 2,
      "images": [
       bahubali1,
       bahubali2
      ],
      "title": "Men Intimate Mist Spray – Bahubali",
      "description": "Introducing the ultimate hygiene solution for modern men. Formulated with lactic acid, tea tree oil, aloe vera extract, chamomile extract, and menthol, ensuring freshness and odor control.",
      "price": "291.00",
      "old_price": "500.00",
      "created_at": "2025-03-04T04:17:35.592Z",
      "name": "Men Intimate Mist Spray"
    },
    {
      "id": 1,
      "images": [
        foam1,
        foam2,
      ],
      "title": "Men’s Intimate Foaming Wash",
      "description": "Men’s Intimate Foaming Wash is specially formulated to maintain hygiene, freshness, and confidence...",
      "price": "591.00",
      "old_price": "650.00",
      "created_at": "2025-03-04T04:15:27.865Z",
      "name": "Men’s Intimate Foaming Wash"
    },
    {
      "id": 3,
      "images": [
        fc1,
        fc2,
        fc3
      ],
      "title": "Charcoal Face Wash",
      "description": "Charcoal Face Wash Cares for Your Skin, Keeping It Clean, Clear, and Fresh!",
      "price": "491.00",
      "old_price": "550.00",
      "created_at": "2025-03-04T04:19:32.530Z",
      "name": "Charcoal Face Wash"
    }
  ],
  prod_loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.prod_loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.prod_loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.prod_loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
