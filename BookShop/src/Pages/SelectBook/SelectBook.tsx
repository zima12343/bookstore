import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IBook, ICurrentBook } from "../../types/type";
import { useEffect } from "react";
import { GetCurrentBook } from "../../store/currentBookSlice";
import style from './selectBook.module.scss'
import { ThunkDispatch } from "@reduxjs/toolkit";
import LikeBtn from "../../ui_components/LikeButtons/LikeBtn";
import { ToggleFavorite } from "../../store/favoriteSlice";
import { AddToCart } from "../../store/cartModalSlice";

interface ICurrentBookSlice {
    book: ICurrentBook,
    isLoading: true,
    isError: false
}

const SelectBook = () => {
    const { wrap, left, right, image,
        desc, c_wrap, c_line_wrap, c_left,
        c_right, btns, labels, sale,
        news, price, new_price, old_price,
        rating, navLink, title
    } = style;

    const { books } = useSelector((state: any) => state.favorite)
    const { iban } = useParams();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const { book, isLoading, isError }: ICurrentBookSlice = useSelector((state: any) => state.currentBook)
    const nav = useNavigate();

    const toFav = () => {
        dispatch(ToggleFavorite(book))
    }

    useEffect(() => {
        dispatch(GetCurrentBook(iban?.toString() ?? ""));
    }, [])

    if (isLoading || isError) {
        return <h2>Loading...</h2>
    }

    return <div className="container">
        <span className={navLink} onClick={() => { nav('/') }}>Home</span>
        <h1 className={title}>{book.title}</h1>

        <div className={wrap}>

            <div className={left}>
                <div className={image}>
                    <img src={book.image} alt={book.title} />
                </div>

                <div className={desc}>
                    {book.rating && book.rating !== '0' && <div className={rating}>
                        <i className="fa-solid fa-star"></i>
                        <span>{`${book.rating} (${Math.round(Math.random() * 100)} reviews)`}</span></div>}
                    <p>{book.desc}</p>
                    <div className={c_wrap}>
                        {
                            book.authors &&
                            <div className={c_line_wrap}>
                                <span className={c_left}>Author</span>
                                <span className={c_right}>{book.authors}</span>
                            </div>
                        }

                        {
                            book.language &&
                            <div className={c_line_wrap}>
                                <span className={c_left}>Language</span>
                                <span className={c_right}>{book.language}</span>
                            </div>
                        }

                        {
                            book.pages &&
                            <div className={c_line_wrap}>
                                <span className={c_left}>Page</span>
                                <span className={c_right}>{book.pages}</span>
                            </div>
                        }

                        {
                            book.year &&
                            <div className={c_line_wrap}>
                                <span className={c_left}>Year</span>
                                <span className={c_right}>{book.year}</span>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className={right}>
                <div className={price}>
                    <span className={new_price}>{`${book.price?.replace('$', '') ?? ""} $`}</span>
                    <span className={old_price}>{`${Math.round(Number(book.price?.replace('$', '')) * 1.5 * 100) / 100} $`}</span>
                </div>

                <div className={labels}>
                    <span className={sale}>Sale 50%</span>
                    <span className={news}>New</span>
                </div>
                <div className={btns}>
                    <button onClick={() => {dispatch(AddToCart(book))}}>Add to cart</button>
                    <LikeBtn isActive={books.filter((x:IBook) => x.isbn13 === book.isbn13).length > 0} custonStyle={{ fontSize: "30px", color: "grey", cursor: "pointer" }} click={toFav}></LikeBtn>
                </div>
            </div>

        </div>

    </div>
}

export default SelectBook;