import { configureStore } from "@reduxjs/toolkit";
import newBookSlice from "./newBookSlice";
import currentBookSlice from "./currentBookSlice";
import sharpSlice from "./sharpSlice";
import databaseSlice from "./databaseSlice";
import jsSlice from "./jsSlice";
import sqlSlice from "./sqlSlice";
import searchSlice from "./searchSlice";
import favoriteSlice from "./favoriteSlice";
import cartModalSlice from "./cartModalSlice";

export default configureStore({
    reducer: {
        newBook: newBookSlice,
        currentBook: currentBookSlice,
        sharp: sharpSlice,
        database: databaseSlice,
        jsBook: jsSlice,
        sqlBook: sqlSlice,
        search: searchSlice,
        favorite: favoriteSlice,
        cart: cartModalSlice
    }
  });