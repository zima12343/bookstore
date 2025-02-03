export interface IBook {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}

export interface ICurrentBook {
    error?: string;
    title?: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    isbn10?: string;
    language?: string,
    isbn13?: string;
    pages?: string;
    year?: string;
    rating?: string;
    desc?: string;
    price?: string;
    image?: string;
    url?: string;
    pdf?: {};
}

