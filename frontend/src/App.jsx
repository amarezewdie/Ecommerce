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
import Footer from './components/Footer';
import Search from './components/Search';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <div className="px-4 sm:px[5vw] md:px[7vw] lg:px[9vw]">
      <div className="max-w-[1120px] mx-auto">
        <ToastContainer />
        <NavBar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App
