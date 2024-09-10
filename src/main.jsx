import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import OAuth from './Providers/Firebase/OAuth.jsx'
import Themes from './Providers/Themes/Themes.jsx'
import { router } from './Routes/Routes.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <OAuth>
         <Themes>
            <QueryClientProvider client={queryClient}>
               <RouterProvider router={router} />
            </QueryClientProvider>
         </Themes>
      </OAuth>
   </StrictMode>,
)
