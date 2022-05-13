import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Routers = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/catalog/:id" element = {<Product/>} />
              <Route path="/cart" element = {<Cart/>} />
              <Route path="/catalog" element = {<Catalog/>} />
              <Route path="/" element = {<Home/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default Routers