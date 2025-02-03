import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNewBook } from "../../store/newBookSlice";
import { IBook } from "../../types/type";
import Card from "../../Components/Card/Card";
import style from './allNewBook.module.scss'
import { useNavigate } from "react-router-dom";

interface INewBook {
    books: IBook[],
    isLoading: boolean,
    isError: boolean
}

const AllNewBook = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const { books, isLoading, isError }: INewBook = useSelector((state: any) => state.newBook)
    useEffect(() => {
        dispatch(GetNewBook());
    }, []);
    const nav = useNavigate();


    if (isLoading || isError) {
        return <h2>Loading...</h2>
    }

    return <section className={style.section}>
        <div className="container">
            <span className={style.navLink} onClick={() => { nav('/') }}>Home</span>
            <h2>New Books</h2>
            <div className={style.wrap}>
                {books.map(x => <Card key={x.isbn13} book={x}></Card>)}
            </div>
        </div>
    </section>
}

export default AllNewBook;