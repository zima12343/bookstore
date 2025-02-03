import style from './footer.module.scss'
const Footer = () => {
    return <footer className={style.footer}>
        <div className="container">
            <p className={style.text}>© Book shop for it 2025</p>
        </div>
    </footer>
}

export default Footer