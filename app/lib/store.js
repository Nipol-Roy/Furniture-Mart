import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListSlice from "./wishlistSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishList: wishListSlice
    }
})
