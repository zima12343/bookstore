import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetSearchBook } from "../../store/searchSlice";
import style from './searchBook.module.scss'
import Card from "../../Components/Card/Card";
import { IBook } from "../../types/type";
import Pagination from "../../Components/Pagination/Pagination";

const SearchBook = () => {
    const { query } = useParams();
    const [page, setPage] = useState(1);
    const nav = useNavigate();
    const { books, pageQty } = useSelector((state: any) => state.search)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    useEffect(() => {
        dispatch(GetSearchBook({ page: page, query: query?.toString() ?? "" }))
    }, [page, query]);

    return <section className={style.section}>
        <div className="container">
            <span className={style.navLink} onClick={() => { nav('/') }}>Home</span>
            <h2 className={style.h}>{query}</h2>
            <div className={style.wrap}>
                {books.map((x: IBook) => <Card key={x.isbn13} book={x}></Card>)}
            </div>
            <Pagination page={page} pageQty={pageQty} setPage={(x) => { setPage(x) }}></Pagination>
        </div>
    </section>
}


export default SearchBook;