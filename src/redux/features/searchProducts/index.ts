import { createSlice } from "@reduxjs/toolkit";


type initialStateType = {
    searchValue : string
}


const initialState : initialStateType  = {
    searchValue : ''
}

export const search = createSlice({
    name : 'search products',
    initialState,
    reducers :{

        _setSearchValue : (state, action) => {
          state.searchValue = action.payload
        }
    }
})



export const{_setSearchValue}  = search.actions
export default search.reducer