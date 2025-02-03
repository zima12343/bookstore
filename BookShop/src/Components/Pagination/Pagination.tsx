import style from './pagination.module.scss'
interface IProps {
    page: number,
    pageQty: number,
    setPage: (x: number) => void
}

const Pagination = ({ page, pageQty, setPage }: IProps) => {
    return <div className={style.wrap}>

        {page == 1 && <>
            <i className={`fa-solid fa-backward ${style.disabled}`}></i>
            <i className={`fa-solid fa-chevron-left ${style.disabled}`}></i>
        </>}

        {page != 1 && <>
            <i className="fa-solid fa-backward" onClick={() => setPage(1)}></i>
            <i className="fa-solid fa-chevron-left" onClick={() => setPage(page - 1)}></i>
        </>}

        {page > 1 && <span onClick={() => setPage(page - 1)}>{page - 1}</span>}
        <span>{page}</span>
        {page + 1 <= pageQty && <span onClick={() => setPage(page + 1)}>{page + 1}</span>}
        {page + 2 <= pageQty && <span onClick={() => setPage(page + 2)}>{page + 2}</span>}

        {page == pageQty && <>
            <i className={`fa-solid fa-chevron-right ${style.disabled}`} ></i>
            <i className={`fa-solid fa-forward ${style.disabled}`} ></i>
        </>}

        {page != pageQty && <>
            <i className="fa-solid fa-chevron-right" onClick={() => setPage(page + 1)}></i>
            <i className="fa-solid fa-forward" onClick={() => setPage(pageQty)}></i>
        </>}
    </div>
}

export default Pagination