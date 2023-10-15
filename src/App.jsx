import React, { Suspense } from 'react'
import { RouterProvider, createHashRouter, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  const LandingPage = React.lazy(() => import('../src/pages/LandingPage/Index'))
  const Service = React.lazy(() => import("../src/pages/Service/Index"))
  const Contacts = React.lazy(() => import("../src/pages/Contacts/Index"))
  const About = React.lazy(() => import("../src/pages/About/Index"))

  const Loader = () => {
    return (
      <div className="load__wrapper" data-preloader-position="center" > 
        <svg className="loading__page" viewBox="25 25 50 50" > 
            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"></circle> 
        </svg>
      </div>
    )
  }

  const router = createHashRouter([
    {
      path:'/',
      element:<Navigate to='/home' />
    },
    {
      path:'/home',
      element:<LandingPage />
    },
    {
      path:'/services/:name',
      element:<Service />
    },
    {
      path:'/contacts',
      element:<Contacts />
    },
    {
      path:'/about',
      element:<About />
    },
  ])

  return (
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
  )
}

export default App
