import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const _fetchCategories = createAsyncThunk<string[]>('categories/fetchCategories', async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products/categories')
  return data
})


type initialStateTypes = {
  categories: Array<string>
  categoriesStatus: {
    isLoading: boolean,
    isError: boolean
  }
}
const initialState: initialStateTypes = {
  categories: [],
  categoriesStatus: {
    isLoading: false,
    isError: false
  }
}

export const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(_fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.categoriesStatus = {
          isLoading: false,
          isError: false
        }

      })

      .addCase(_fetchCategories.pending, (state) => {
        state.categoriesStatus = {
          isLoading: true,
          isError: false
        }
      })

      .addCase(_fetchCategories.rejected, (state) => {
        state.categoriesStatus = {
          isLoading: false,
          isError: true
        }
      })
  }
})

export default categories.reducer