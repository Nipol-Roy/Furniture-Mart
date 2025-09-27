import { createSlice } from "@reduxjs/toolkit";


const wishListSlice = createSlice({
    name: "wishList",
    initialState: {
        items: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload
            if (!state.items.some((expectedItem) => expectedItem.id === item.id)) {
                state.items.push(item)
            }
        },
        removeWishlist: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload)
        }
        
    }
})

export const { addToWishlist, removeWishlist } = wishListSlice.actions
export default wishListSlice.reducer