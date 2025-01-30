import { useDispatch, useSelector } from "react-redux"
import NewBook from "../../Components/NewBooks/NewBook"
import { useEffect } from "react";
import { GetCharpBook } from "../../store/sharpSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import LineCard from "../../Components/LineCards/LineCards";
import { GetJsBook } from "../../store/jsSlice";
import { GetDatabaseBook } from "../../store/databaseSlice";
import { GetSqlBook } from "../../store/sqlSlice";

const MainPage = () => {
    const CharpSelector = useSelector((state: any) => state.sharp);
    const JsSelector = useSelector((state: any) => state.jsBook);
    const DatabaseSelector = useSelector((state: any) => state.database);
    const SqlSelector = useSelector((state: any) => state.sqlBook);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    useEffect(() => {
        dispatch(GetCharpBook(1));
        dispatch(GetJsBook(1));
        dispatch(GetDatabaseBook(1));
        dispatch(GetSqlBook(1));
    }, [])
    return <section style={{padding:"30px 0"}}>
        <NewBook />
        <LineCard books={CharpSelector.books} title={"C# Books"} query={"sharp"}></LineCard>
        <LineCard books={JsSelector.books} title={"JS Books"} query={"javascript"}></LineCard>
        <LineCard books={DatabaseSelector.books} title={"Database Books"} query={"database"}></LineCard>
        <LineCard books={SqlSelector.books} title={"Sql Books"} query={"sql"}></LineCard>
    </section>
}

export default MainPage