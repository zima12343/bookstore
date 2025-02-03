import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../types/type";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        books: [],
    },
    reducers: {
        ToggleFavorite: (state, action) => {
            if (state.books.filter((x: IBook) => x.isbn13 === action.payload.isbn13).length > 0) {
                state.books = state.books.filter((x: IBook) => x.isbn13 !== action.payload.isbn13);
                return;
            }
            state.books.push(action.payload);
        }
    }

});

export const {ToggleFavorite} = favoriteSlice.actions 
export default favoriteSlice.reducer;