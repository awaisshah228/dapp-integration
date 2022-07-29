import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'

const index = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      {children}
    </BrowserRouter>
  )
}

export default index
