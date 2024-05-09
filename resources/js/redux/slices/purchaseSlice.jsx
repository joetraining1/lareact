import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchaseState: {
        open: true,
    },
};

export const purchaseSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        slideIn: (state, action) => {
            state.sidebarState.open = true;
        },
        slideOut: (state, action) => {
            state.sidebarState.open = false;
        },
        slidePrev: (state, action) => {
            state.sidebarState.open = !state.sidebarState.open;
        },
    },
});

export const { slideIn, slideOut, slidePrev } = purchaseSlice.actions;

export default purchaseSlice.reducer;
