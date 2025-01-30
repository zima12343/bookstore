import { Route, Routes } from 'react-router-dom'
import Template from './Pages/Template/Template'
import MainPage from './Pages/Main/MainPage'
import SelectBook from './Pages/SelectBook/SelectBook'
import AllNewBook from './Pages/AllNewBook/AllNewBook'
import SearchBook from './Pages/SearchBook/SearchBook'
import Favorite from './Pages/Favorites/Favorite'

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Template />}>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/book/:iban' element={<SelectBook />}></Route>
        <Route path='/book/new' element={<AllNewBook />}></Route>
        <Route path='/book/search/:query' element={<SearchBook />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
      </Route>
    </Routes>
  </>
}


export default App
