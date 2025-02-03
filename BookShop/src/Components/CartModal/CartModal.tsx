import { useDispatch, useSelector } from 'react-redux'
import style from './cartModal.module.scss'
import { IBook } from '../../types/type';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Close, Order, RemoveFromCart } from '../../store/cartModalSlice';

const CartModal = () => {
    const { isOpen, books } = useSelector((state: any) => state.cart)
    const { isOpenModal, modal, header, content, btns, card, left, middle, right, title, subtitle, cancel, submit, price } = style;
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    return <div className={`${isOpen ? isOpenModal : ""} ${modal}`}>
        <div className={header}>
            <span>Cart</span>
            <i className="fa-solid fa-circle-xmark" onClick={() => { dispatch(Close()) }}></i>
        </div>
        <div className={content}>
            {books.length < 1 ? <h2>Card is empty</h2>
                :
                books.map((x: IBook, y: number) => {
                    return <div key={y} className={card}>
                        <div className={left}>
                            <img src={x.image} alt="#" />
                            <div className={middle}>
                                <p className={title}>{x.title}</p>
                                <p className={subtitle}>{x.subtitle}</p>
                                <p className={price}>{x.price}</p>
                            </div>
                        </div>
                        <div className={right}>
                            <i className="fa-solid fa-circle-xmark" onClick={() => {
                                dispatch(RemoveFromCart(x));
                            }}></i>
                        </div>
                    </div>
                })}
        </div>
        <div className={btns}>
            <button className={cancel} onClick={() => { dispatch(Close()) }}>Cancel</button>
            <button className={submit} onClick={() => { dispatch(Order()) }}>Buy now</button>
        </div>
    </div>
}

export default CartModal