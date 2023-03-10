import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// components and css
import App from './App'
import Layout from './components/layout/layout'
import Submit from './components/submit/submit'
// import Main from './components/main/main'
import './index.css'


export const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/createCV/*', element: <Layout />},
  {path: '/submit', element: <Submit />}
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
