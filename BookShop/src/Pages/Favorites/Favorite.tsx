import { useNavigate } from 'react-router-dom'
import style from './favorites.module.scss'
import { IBook } from '../../types/type';
import Card from '../../Components/Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {
    const nav = useNavigate();
    const { books } = useSelector((state: any) => state.favorite)

    return <section className={style.section}>
    <div className="container">
        <span className={style.navLink} onClick={() => { nav('/') }}>Home</span>
        <h2 className={style.h}>Favorite</h2>
        <div className={style.wrap}>
            {books.map((x: IBook) => <Card key={x.isbn13} book={x}></Card>)}
        </div>
    </div>
</section>
}

export default Favorite;