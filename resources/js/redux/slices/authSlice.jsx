import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authState: {
        user_id: "",
        type: 0,
        token: "",
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authState = action.payload;
        },
        logout: (state, action) => {
            state.authState = initialState.authState;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
