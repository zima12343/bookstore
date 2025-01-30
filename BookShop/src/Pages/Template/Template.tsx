import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import style from './template.module.scss'
import Footer from "./Components/Footer/Footer"

const Template = () => {
    return <>
        <Header />
        <main className={style.main}>
            <Outlet />
        </main>
        <Footer></Footer>
    </>
}

export default Template