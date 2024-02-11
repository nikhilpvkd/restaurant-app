import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/api";
import { orderSlice } from "../features/orderSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        orders: orderSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
