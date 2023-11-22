// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categories from '../features/categories';
import categoryModal from '../features/modal';

const store = configureStore({
  reducer: { 
    categories,
    categoryModal
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
