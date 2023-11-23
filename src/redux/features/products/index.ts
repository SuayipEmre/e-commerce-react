import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type stateTypes = {
    products: productsType
    productsStatus: {
        isLoading: boolean,
        isError: boolean
    }
}



type productsType = {
    category: string
    description: string
    image: string
    title: string
    price: number
    id: number
    rating: {
        count: number
        rate: number
    }
}[]

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
    }
})

export default products.reducer