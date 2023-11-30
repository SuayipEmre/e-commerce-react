// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import categories from '../features/categories';
import categoryModal from '../features/modal';
import products from '../features/products';
import search from '../features/searchProducts';
import sorting from '../features/sorting';
import detailsOfProduct from '../features/productDetails';
import favoriteProducts from '../features/favoriteProducts';
import cart from '../features/cart';


const store = configureStore({
  reducer: {
    search,
    categories,
    products,
    detailsOfProduct,
    categoryModal,
    sorting,
    favoriteProducts,
    cart 
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
