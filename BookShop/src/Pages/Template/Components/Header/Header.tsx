import { useNavigate } from 'react-router-dom';
import LikeBtn from '../../../../ui_components/LikeButtons/LikeBtn';
import style from './header.module.scss'
import { useState } from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { Open } from '../../../../store/cartModalSlice';

const Header = () => {
    const { wrap, buttons, btn_wrap, logo, search_inp, logo_wrap, search } = style;
    const [searchValue, setSearchValue] = useState("");
    const nav = useNavigate();
    const toSearch = () => {
        if (searchValue === '') {
            return;
        }
        nav(`/book/search/${searchValue}`)
    }

    const { isOpen, books } = useSelector((state: any) => state.cart)
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    return <header>
        <div className={wrap}>
            <div className={logo_wrap} onClick={() => { nav('/') }}>
                <span className={logo}>book shop</span>
                <span className={logo}>for it</span>

            </div>
            <div className={search}>
                <input className={search_inp} type="text" placeholder='Search...' onChange={(e) => { setSearchValue(e.target.value) }} />
                <i className="fa-solid fa-magnifying-glass" onClick={toSearch}></i>
            </div>
            <div className={buttons}>
                <div className={btn_wrap}>
                    <LikeBtn
                        isActive={true}
                        custonStyle={{
                            fontSize: "25px",
                            color: "#FFF"
                        }} click={function (): void {
                            nav('/favorite')
                        }} />
                    <span>Favorites</span>
                </div>

                <div className={btn_wrap}  onClick={() => {dispatch(Open()); console.log(books)}}>
                    <i className="fa-solid fa-basket-shopping"
                        style={{
                            fontSize: "25px",
                            color: "#FFF"
                        }}/>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    </header>
}

export default Header;