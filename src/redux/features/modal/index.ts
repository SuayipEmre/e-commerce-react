import { createSlice } from "@reduxjs/toolkit";




type modalType = {
    modal : any
}


const initialState : modalType  = {
    modal : false
}


export const categoryModal = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        _setModal : (state, action) => {
            console.log(action.payload);
            
            state.modal = action.payload
        }
    }
})

export const {_setModal} = categoryModal.actions
export default categoryModal.reducer