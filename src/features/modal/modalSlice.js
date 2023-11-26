import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,

}

const modalSlice = createSlice({
    name: 'modal',
    initialState,

    reducers: {
        openModal: (state, action)=>{
            state.isOpen = true;
        },

        cancelModal: (state, action)=>{
            state.isOpen = false;
        }
    }

    // so we go to the store and set it up of course
});

export default modalSlice.reducer;
export const {openModal, cancelModal} = modalSlice.actions;
