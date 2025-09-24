import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existiongItem = state.items.find((i) => i.id === item.id)
            if (existiongItem) {
                existiongItem.quantity += 1;
            } else {
                state.items.push({...item,quantity:1})
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item)=> item.id !== itemId)
        },

        updateQuantuty: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item && quantity >= 1) {
                item.quantity = quantity;
            }
        }
    }
})

export const { addToCart, removeFromCart, updateQuantuty } = cartSlice.actions;
export default cartSlice.reducer