import { createSlice } from "@reduxjs/toolkit";

type sortingType = {
    sortValue : string
}
const initialState : sortingType = {
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