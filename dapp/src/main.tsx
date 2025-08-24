import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppProvider from './context/AppContext.tsx'
import { AppContext } from './lib/constants.ts'
import {createBrowserRouter, RouterProvider} from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider AppContext={AppContext} >
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
