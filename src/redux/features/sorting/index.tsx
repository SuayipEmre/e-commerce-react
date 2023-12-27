import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    sortValue : string
}
const initialState : initialStateType = {
    sortValue : ''
}
export const sorting = createSlice({
    name : 'sorting by price',
    initialState,
    reducers : {
        
        _setSortValue : (state, action) => {
          state.sortValue = action.payload
        }
    }
})

export const{_setSortValue}  = sorting.actions
export default sorting.reducer