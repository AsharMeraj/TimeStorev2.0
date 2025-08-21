import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { MainDatum, SizeEnum } from '../ProductPage/ProductList/ProductType';
import { ProdList } from '../utils/ProdListType';

// Define the CartItem and CartState interfaces
export interface CartItem {
  data: ProdList;
  quantity: number;
  selectedSize: string;
  singlePrice: number
}

interface CartState {
  cartItems: CartItem[];
}

interface UpdateCart {
  data: ProdList;
  val: string | number;
  key: string;
}

interface RemoveItem {
  data: ProdList
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.cartItems.find((item) => item.data.id === action.payload.data.id);
      if (findItem) {
        findItem.quantity = (findItem.quantity || 0) + 1;
        findItem.data.Price = findItem.quantity * findItem.data.Price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action: PayloadAction<UpdateCart>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.data.id === action.payload.data.id) {
          if (action.payload.key === 'quantity') {
            item.data.Price = item.singlePrice * +action.payload.val
          }
          return { ...item, [action.payload.key]: action.payload.val };
        }
        return item;
      });
    },
    removeFromCart: (state, action: PayloadAction<RemoveItem>) => {
      state.cartItems = state.cartItems.filter((item) => item.data.id !== action.payload.data.id)
    }
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

// Selector
export const selectCount = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
