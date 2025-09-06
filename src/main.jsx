import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Root from './root'
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from "./context/index.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </ContextProvider>
    </StrictMode>,
)
