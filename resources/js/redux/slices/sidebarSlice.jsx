import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarState: {
        open: true,
    },
};

export const sidebarSlice = createSlice({
    name: "sidebar",
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

export const { slideIn, slideOut, slidePrev } = sidebarSlice.actions;

export default sidebarSlice.reducer;
