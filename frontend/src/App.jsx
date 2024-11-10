import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Collection from './pages/Collection'
import About from './pages/About';
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import NavBar from './components/NavBar';


const App = () => {
  return (
    <div className="px-4 sm:px[5vw] md:px[7vw] lg:px[9vw]">
      <div className='max-w-600px'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product:id" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
