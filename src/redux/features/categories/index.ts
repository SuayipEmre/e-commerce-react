import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const _fetchCategories = createAsyncThunk('categories', async() =>{
    const {data} = await axios.get('https://fakestoreapi.com/products/categories')
    return data
})


type categories =  {
    categories : Array<string>
}
const initialState : categories = {
    categories : []
}

export const categories = createSlice({
    name : 'categories',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
      builder.addCase(_fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload        
      })
    }
})

export default categories.reducer