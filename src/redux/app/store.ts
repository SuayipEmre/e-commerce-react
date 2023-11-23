// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categories from '../features/categories';
import categoryModal from '../features/modal';
import products from '../features/products';

const store = configureStore({
  reducer: { 
    categories,
    products,
    categoryModal
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
