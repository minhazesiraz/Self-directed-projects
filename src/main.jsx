import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Themes from './Providers/Themes/Themes.jsx'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themes>
    <RouterProvider router={router} />
    </Themes>
  </StrictMode>,
)
