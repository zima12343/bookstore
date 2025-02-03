import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NEW_BOOK } from "../constants/apiConstants";

export const GetNewBook = createAsyncThunk(
    'books/new',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(NEW_BOOK,
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


const newBookSlice = createSlice({
    name: "newBook",
    initialState: {
        books: [],
        isLoading: true,
        isError: false
    },
    reducers: {
    },
    extraReducers: (builder: any) => {
        builder.addCase(GetNewBook.fulfilled, (state: any, action: any) => {
            state.books = action.payload.books;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(GetNewBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetNewBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default newBookSlice.reducer;