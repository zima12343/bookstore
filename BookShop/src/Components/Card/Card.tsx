import { useDispatch, useSelector } from "react-redux";
import { IBook } from "../../types/type"
import LikeBtn from "../../ui_components/LikeButtons/LikeBtn";
import style from './card.module.scss'
import { ThunkDispatch } from "@reduxjs/toolkit";
import { ToggleFavorite } from "../../store/favoriteSlice";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../../store/cartModalSlice";

interface IProps {
    book: IBook
}
const Card = ({ book }: IProps) => {
    const { card, btn_wrap, btn } = style;
    const { books } = useSelector((state: any) => state.favorite)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const toFav = () => {
        dispatch(ToggleFavorite(book))
    }
    const nav = useNavigate();

    return <div className={card} >
        <h3>{book.title}</h3>
        <img src={book.image} alt="" onClick={() => nav(`/book/${book.isbn13}`)} />
        <div className={btn_wrap}>
            <span>{book.price}</span>
            <div className={btn}>
                <i className="fa-solid fa-cart-plus" onClick={() => dispatch(AddToCart(book))}></i>
                <LikeBtn isActive={books.filter((x: IBook) => x.isbn13 === book.isbn13).length > 0} custonStyle={{ fontSize: "20px" }} click={toFav}></LikeBtn>
            </div>
        </div>

    </div>
}

export default Card;