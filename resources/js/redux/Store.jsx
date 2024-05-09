import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sidebarSlice from "./slices/sidebarSlice";
import purchaseSlice from "./slices/purchaseSlice";
import archiveSlice from "./slices/archiveSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        sidebar: sidebarSlice,
        purchase: purchaseSlice,
        archive: archiveSlice,
    },
});
