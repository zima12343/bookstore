import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  DATABASE_BOOKS } from "../constants/apiConstants";

export const GetDatabaseBook = createAsyncThunk(
    'books/database',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await fetch(DATABASE_BOOKS.replace('@page', page.toString()),
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


const databaseSlice = createSlice({
    name: "database",
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
        builder.addCase(GetDatabaseBook.fulfilled, (state: any, action: any) => {
            const { total, books, page } = action.payload;
            state.books = books;
            state.page = page;
            state.pageQty = total / 10 + (total % 10 > 0 ? 1 : 0);
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(GetDatabaseBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetDatabaseBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default databaseSlice.reducer;