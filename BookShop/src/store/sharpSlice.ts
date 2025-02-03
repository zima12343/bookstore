import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { C_CHARP_BOOKS } from "../constants/apiConstants";

export const GetCharpBook = createAsyncThunk(
    'books/c_charp',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await fetch(C_CHARP_BOOKS.replace('@page', page.toString()),
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


const sharpSlice = createSlice({
    name: "c_charp",
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
        builder.addCase(GetCharpBook.fulfilled, (state: any, action: any) => {
            const { total, books, page } = action.payload;
            state.books = books;
            state.page = page;
            state.pageQty = total / 10 + (total % 10 > 0 ? 1 : 0);
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(GetCharpBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetCharpBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default sharpSlice.reducer;