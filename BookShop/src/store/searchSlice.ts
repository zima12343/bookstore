import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { C_CHARP_BOOKS, SEARCH_BOOK } from "../constants/apiConstants";
interface IQuery {
    page: number,
    query: string
}
export const GetSearchBook = createAsyncThunk(
    'books/search',
    async (query: IQuery, { rejectWithValue }) => {
        try {
            const response = await fetch(SEARCH_BOOK.replace('@query', query.query).replace('@page', query.page.toString()),
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


const searchSlice = createSlice({
    name: "search",
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
        builder.addCase(GetSearchBook.fulfilled, (state: any, action: any) => {
            const { total, books, page } = action.payload;
            state.books = books;
            state.page = page;
            state.pageQty = Math.round((total - total % 10) / 10) + (total % 10 > 0 ? 1 : 0);
            state.isLoading = false;
            state.isError = false;
            console.log(state.pageQty)
        });
        builder.addCase(GetSearchBook.pending, (state: any) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(GetSearchBook.rejected, (state: any) => {
            state.isLoading = false;
            state.isError = true;
        });
    },

});

export default searchSlice.reducer;