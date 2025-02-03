import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CURRENT_BOOK } from "../constants/apiConstants";

export const GetCurrentBook = createAsyncThunk(
    'books/current',
    async (iban: string, { rejectWithValue }) => {
        try {
            const response = await fetch(CURRENT_BOOK.replace('@iban', iban),
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


const currentBookSlice = createSlice({
    name: "current",
    initialState: {
        book: {},
        isLoading: true,
        isError: false
    },
    reducers: {
    },
    extraReducers: (builder: any) => {
        builder.addCase(GetCurrentBook.fulfilled, (state: any, action: any) => {
            state.book = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(GetCurrentBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetCurrentBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default currentBookSlice.reducer;