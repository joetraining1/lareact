import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalState: {
        open: false,
    },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        In: (state, action) => {
            state.modalState.open = true;
        },
        Out: (state, action) => {
            state.modalState.open = false;
        },
        shift: (state, action) => {
            state.modalState.open = !state.modalState.open;
        },
    },
});

export const { In, Out, shift } = modalSlice.actions;

export default modalSlice.reducer;
