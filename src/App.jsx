import React, { Suspense } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import './App.css'

function App() {
  const LandingPage = React.lazy(() => import('../src/pages/LandingPage'))

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
      element:<LandingPage />
    }
  ])

  return (
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
  )
}

export default App
