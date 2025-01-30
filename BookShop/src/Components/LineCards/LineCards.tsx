import { useNavigate } from "react-router-dom";
import { IBook } from "../../types/type";
import style from './lineCards.module.scss'

interface IProps {
    books: IBook[],
    title: string,
    query: string
}
const LineCard = ({ books, title, query }: IProps) => {
    const { wrap, card, book_wrap } = style;
    const nav = useNavigate();
    return <div className="container"><div className={wrap}>
        <h3 onClick={() => {nav(`/book/search/${query}`)}}>{title}</h3>
        <div className={book_wrap}>
            {books.filter((_, i) => i < 5).map((book) => {
                return <div key={book.isbn13} className={card} onClick={() => nav(`/book/${book.isbn13}`)}>
                    <img src={book.image} alt="#" />
                    <p>{book.title}</p>
                    <span>{book.price}</span>
                </div>
            })}
        </div>
    </div>
    </div>
}

export default LineCard;