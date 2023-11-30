import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productItemType, productsType } from "~/common/productsType";


type stateType = {
    products: productsType,
    productStatus: {
        isLoading: boolean,
        isError: boolean
    }
    isFavorite: boolean
}

const initialState: stateType = {
    products: [],
    productStatus: {
        isLoading: false,
        isError: false
    },
    isFavorite: false
}


//fetch
export const _fetchFavoriteProducts = createAsyncThunk<productsType>('favorites/fetch-favorite-products', async () => {
    const { data } = await axios.get('http://localhost:3000/favorites')
    return data
})
//post
export const _addToFavorites = createAsyncThunk<productItemType, productItemType>('favorites/addToFavorites', async (data) => {
    const res = await axios.post(`http://localhost:3000/favorites/`, data)
    return res.data
})

//delete
export const _removeFavoriteProduct = createAsyncThunk<any, number>('favorites/removeFromFavorites', async (id) => {
    const res = await axios.delete(`http://localhost:3000/favorites/${id}`)
    return id
})


export const favoriteProducts = createSlice({
    name: 'favorite products',
    initialState,
    reducers: {
        _setIsFavorite: (state, action) => {
            state.isFavorite = action.payload
        }
    },

    extraReducers: (builder) => {
        builder

            //Fetch
            .addCase(_fetchFavoriteProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.productStatus = {
                    isLoading: false,
                    isError: false
                }
            })

            .addCase(_fetchFavoriteProducts.pending, (state) => {
                state.productStatus = {
                    isLoading: true,
                    isError: false
                }
            })



            .addCase(_fetchFavoriteProducts.rejected, (state) => {
                state.productStatus = {
                    isLoading: false,
                    isError: true
                }
            })


            //POST
            .addCase(_addToFavorites.fulfilled, (state, action) => {
                state.products.push(action.payload)
                state.productStatus = {
                    isLoading: false,
                    isError: false
                }
            })

            .addCase(_addToFavorites.pending, (state) => {
                state.productStatus = {
                    isLoading: true,
                    isError: false
                }
            })

            .addCase(_addToFavorites.rejected, (state, action) => {
                state.productStatus = {
                    isLoading: false,
                    isError: true
                }
            })

            //remove
            .addCase(_removeFavoriteProduct.fulfilled, (state, action) => {
                const id = action.payload
                const idx = state.products.findIndex(item => item.id == id)
                state.products.splice(idx, 1)
                state.productStatus = {
                    isLoading: false,
                    isError: false
                }
            })

            .addCase(_removeFavoriteProduct.pending, (state) => {
                state.productStatus = {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(_removeFavoriteProduct.rejected, (state) => {
                state.productStatus = {
                    isLoading: false,
                    isError: true
                }
            })


    }
})

export const { _setIsFavorite } = favoriteProducts.actions
export default favoriteProducts.reducer