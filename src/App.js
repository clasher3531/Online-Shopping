import React from "react";
import HomePage from "./components/HomePage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
    return (
      <div className='App'>
        <Router> 
          <Routes> 
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/checkout" element={<CheckoutPage/>}/>
          </Routes> 
        </Router> 
        
      </div>
  );
}

export default App;
