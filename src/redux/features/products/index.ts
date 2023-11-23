import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productsType } from "../productType";


type stateTypes = {
    products: productsType
    productsStatus: {
        isLoading: boolean,
        isError: boolean
    }
}




const initialState: stateTypes = {
    products: [],
    productsStatus: {
        isLoading: false,
        isError: false
    }
}

export const _fetchProducts = createAsyncThunk<productsType>('products/fetchProducts', async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    return data
})
export const _fetchProductByCategory = createAsyncThunk<productsType, string>('products by category/fetchProducts', async (category) => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return data
})

export const products = createSlice({
    name: 'products',
    initialState,
    reducers: {},


    extraReducers: (builder) => {
        builder
            .addCase(_fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.productsStatus = {
                    isError: false,
                    isLoading: false
                }
            })

            .addCase(_fetchProducts.pending, (state) => {
                state.productsStatus = {
                    isError: false,
                    isLoading: true
                }
            })

            .addCase(_fetchProducts.rejected, (state) => {
                state.productsStatus = {
                    isError: true,
                    isLoading: false
                }
            })



            .addCase(_fetchProductByCategory.fulfilled, (state, action) => {     
                state.products = action.payload
                state.productsStatus = {
                    isLoading: false,
                    isError: false
                }
              })
        
        
              .addCase(_fetchProductByCategory.pending, (state) => {     
                state.productsStatus = {
                    isLoading: true,
                    isError: false
                }
              })
        
              .addCase(_fetchProductByCategory.rejected, (state) => {     
                state.productsStatus = {
                    isLoading: false,
                    isError: true
                }
              })
    }
})

export default products.reducer