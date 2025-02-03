import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  JAVASCRIPT_BOOKS } from "../constants/apiConstants";

export const GetJsBook = createAsyncThunk(
    'books/js',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await fetch(JAVASCRIPT_BOOKS.replace('@page', page.toString()),
                {
                    method: "GET",
                });

            if (!response.ok) {
                return rejectWithValue('Error in new posts');
            }
            const data = await response.json();
            return data;

        } catch (err) {
            return rejectWithValue((err as Error).message)
        }
    }
)


const JsSlice = createSlice({
    name: "JS",
    initialState: {
        books: [],
        page: 1,
        pageQty: 1,
        isLoading: true,
        isError: false
    },
    reducers: {
    },
    extraReducers: (builder: any) => {
        builder.addCase(GetJsBook.fulfilled, (state: any, action: any) => {
            const { total, books, page } = action.payload;
            state.books = books;
            state.page = page;
            state.pageQty = total / 10 + (total % 10 > 0 ? 1 : 0);
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(GetJsBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetJsBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default JsSlice.reducer;