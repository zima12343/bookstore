import { useDispatch, useSelector } from 'react-redux';
import style from './newBook.module.scss'
import { useEffect, useState } from 'react';
import { GetNewBook } from '../../store/newBookSlice';
import { IBook } from '../../types/type';
import { useNavigate } from 'react-router-dom';
import { ThunkDispatch } from "@reduxjs/toolkit";

interface INewBook {
    books: IBook[],
    isLoading: boolean,
    isError: boolean
}

const NewBook = () => {
    const { wrap, book_wrap, new_book, img_wrap } = style;
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const { books, isLoading, isError }: INewBook = useSelector((state: any) => state.newBook)
    const { innerWidth } = window;
    const [ qty, setQty ] = useState(5);
    
    useEffect(() => {
        if (innerWidth < 1150) {
            setQty(4);
        }
        if (innerWidth < 1000) {
            setQty(3);
        }
    }, [window.innerWidth])
    useEffect(() => {
        dispatch(GetNewBook());
    }, [])
    const nav = useNavigate();
    return <section className={new_book}>
        <div className='container'>

            <div className={wrap}>
                <h2 onClick={() => { nav('/book/new') }}>New books</h2>
                <div className={book_wrap}>
                    {isLoading && <h2>Loading...</h2>}
                    {isError && <h2>Error...</h2>}
                    {!isError && !isLoading && books
                        .filter((_, y) => y < qty)
                        .map((x, y) => {
                            return <div key={y} className={img_wrap} onClick={() => { nav(`/book/${x.isbn13}`) }}>
                                <img src={x.image} />
                                <span>{x.title}</span>
                            </div>
                        })}

                </div>
            </div>
        </div>
    </section>
}

export default NewBook;