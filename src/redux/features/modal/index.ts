import { createSlice } from "@reduxjs/toolkit";



type initialStateType = {
    modal : boolean
}

const initialState : initialStateType  = {
    modal : false
}


export const categoryModal = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        _setModal : (state, action) => {
            state.modal = action.payload
        }
    }
})

export const {_setModal} = categoryModal.actions
export default categoryModal.reducer