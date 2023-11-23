import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productsType } from "~/components/products/types";


type stateType = {
  product : productsType | {},
  productStatus : {
    isLoading : boolean,
    isError : boolean
  }
}
const initialState : stateType = {
    product : {},
    productStatus : {
        isLoading : false,
        isError : false
    }
}




export const _fetchProductDetails  = createAsyncThunk<productsType, number>('product/detailOfProduct', async(id) => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return data
})

export const detailsOfProduct = createSlice({
    name : 'product details',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
      builder
      .addCase(_fetchProductDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.product = action.payload
        state.productStatus = {
            isLoading : false,
            isError : false
        }
        
      })

      .addCase(_fetchProductDetails.pending, (state) => {
        state.productStatus = {
            isLoading :true ,
            isError : false
        }
      })

      .addCase(_fetchProductDetails.rejected, (state) => {
        state.productStatus = {
            isLoading : false,
            isError : true
        }
      })
    }
})

export default detailsOfProduct.reducer