import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import DetailPage from './pages/Detail'
import CreatePage from './pages/Create'

import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<DetailPage />} />
          <Route path="/create" element={<CreatePage />} />
          {/* <Route path="/users/:slug" element={<DetailPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
