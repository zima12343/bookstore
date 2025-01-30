import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../types/type";

const cartModuleeSlice = createSlice({
    name: "favorite",
    initialState: {
        books: [],
        isOpen: false
    },
    reducers: {
        AddToCart: (state, action) => {
            if (state.books.filter((x: IBook) => x.isbn13 === action.payload.isbn13).length > 0) {
                return;
            }
            state.books.push(action.payload);
            console.log(action.payload);
        },
        RemoveFromCart: (state, action) => {
            state.books = state.books.filter((x: IBook) => x.isbn13 !== action.payload.isbn13);
        },
        Open: (state) => {
            state.isOpen = true
        },
        Close: (state) => {
            state.isOpen = false
        },
        Order: (state) => {
            state.books = [];
            state.isOpen = false; 
        }

    }

});

export const { AddToCart, RemoveFromCart, Open, Close, Order } = cartModuleeSlice.actions
export default cartModuleeSlice.reducer;