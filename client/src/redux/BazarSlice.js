import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },

    // user
    addUser:(state, action) => {
      state.userInfo = action.payload;
    },

    removeUser:(state) => {
      state.userInfo = null;
    }
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
  addUser,
  removeUser
} = bazarSlice.actions;
export default bazarSlice.reducer;
