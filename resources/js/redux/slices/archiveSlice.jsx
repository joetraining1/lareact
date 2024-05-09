import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    archiveState: {
        open: true,
    },
};

export const archiveSlice = createSlice({
    name: "archive",
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

export const { slideIn, slideOut, slidePrev } = archiveSlice.actions;

export default archiveSlice.reducer;
