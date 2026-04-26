import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const App     = lazy(() => import('./App.tsx'))
const Login   = lazy(() => import('./pages/Login.tsx'))
const Careers = lazy(() => import('./pages/Careers.tsx'))
const Contact = lazy(() => import('./pages/Contact.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/"        element={<App />}     />
          <Route path="/login"   element={<Login />}   />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
