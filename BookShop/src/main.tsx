import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import CartModal from './Components/CartModal/CartModal.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Provider store={store}>
    <StrictMode>
      <App />
      <CartModal/>
    </StrictMode>
  </Provider>
  </BrowserRouter>
)
