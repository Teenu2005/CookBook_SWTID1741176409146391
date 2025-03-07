import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import CategoryList from './components/ListCatagori'
import DishList from './components/DishList'
import Home from './components/Home'
import Recipie from './pages/Recipie'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Nav />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/DishList' element={<DishList />} />
          <Route path='/Category' element={<CategoryList />} />
          <Route path='/recipie/:id' element={<Recipie />} />
        </Routes>
    <Footer />
    </>
  )
}

export default App
