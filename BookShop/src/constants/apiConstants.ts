export const NEW_BOOK: string = "https://api.itbook.store/1.0/new";
export const SEARCH_BOOK: string = "https://api.itbook.store/1.0/search/@query/@page";
export const CURRENT_BOOK: string = "https://api.itbook.store/1.0/books/@iban";

export const C_CHARP_BOOKS: string = SEARCH_BOOK.replace("@query", "sharp");
export const JAVASCRIPT_BOOKS: string = SEARCH_BOOK.replace("@query", "javascript");
export const SQL_BOOKS: string = SEARCH_BOOK.replace("@query", "sql");
export const DATABASE_BOOKS: string = SEARCH_BOOK.replace("@query", "database");
