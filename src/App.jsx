import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'
import Error from './components/Error'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<MovieDetail/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App