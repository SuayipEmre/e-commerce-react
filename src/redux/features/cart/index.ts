import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cartItemType, cartType, productsType } from "~/common/productsType";
import { editCartParameterTypes } from "./type";

type initialStateTypes = {
    carts: cartType ,
    totalPrice: string,
    cartStatus: {
        isLoading: boolean,
        isError: boolean
    }
}
const initialState: initialStateTypes = {
    carts: [],
    totalPrice: '',
    cartStatus: {
        isLoading: false,
        isError: false
    }
}

export const _fetchProductFromCart = createAsyncThunk<productsType>('cart/fetchProductFromCart', async () => {
    const { data } = await axios.get('http://localhost:3000/cart')
    return data
})

export const _addToCart = createAsyncThunk<cartItemType, cartItemType>('cart/addToCart', async (product) => {
    const { data } = await axios.post('http://localhost:3000/cart', product)
    return data
})

export const _deleteFromCart = createAsyncThunk<unknown, number>('cart/deleteFromCart', async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`)
    return id
})





export const _editCart = createAsyncThunk<unknown, editCartParameterTypes>('cart/editCart', async ({ id, quantity}) => {
    const { data } = await axios.patch(`http://localhost:3000/cart/${id}`, { quantity })
    return data
})


export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        _getCartTotal: (state) => {

            state.totalPrice = Number(state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0)).toFixed(2)
        }
    },
    extraReducers: (builder) => {
        builder

            //Fetch Cart
            .addCase(_fetchProductFromCart.pending, (state) => {
                state.cartStatus = {
                    isLoading: true,
                    isError: false
                }
            })

            .addCase(_fetchProductFromCart.fulfilled, (state, action) => {
                state.carts = action.payload,
                    state.cartStatus = {
                        isLoading: false,
                        isError: false
                    }
            })


            .addCase(_fetchProductFromCart.rejected, (state) => {
                state.cartStatus = {
                    isLoading: false,
                    isError: true
                }
            })


            //add to cart
            .addCase(_addToCart.pending, (state) => {
                state.cartStatus = {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(_addToCart.fulfilled, (state, action) => {
                state.carts.push(action.payload)
                state.cartStatus = {
                    isLoading: false,
                    isError: false
                }
            })

            .addCase(_addToCart.rejected, (state) => {
                state.cartStatus = {
                    isLoading: false,
                    isError: true
                }
            })




            .addCase(_deleteFromCart.pending, (state) => {
                state.cartStatus = {
                    isLoading: true,
                    isError: false
                }
            })

            .addCase(_deleteFromCart.fulfilled, (state, action) => {
                state.carts = state.carts.filter(item => item.id !== action.payload)
                state.cartStatus = {
                    isLoading: false,
                    isError: false
                }
            })

            .addCase(_deleteFromCart.rejected, (state) => {
                state.cartStatus = {
                    isLoading: false,
                    isError: true
                }
            })



            //EDIT
            .addCase(_editCart.fulfilled, (state) => {
                state.cartStatus = {
                    isLoading: false,
                    isError: false
                }
            })



    }
})

export const { _getCartTotal } = cart.actions
export default cart.reducer