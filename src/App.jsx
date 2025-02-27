import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App