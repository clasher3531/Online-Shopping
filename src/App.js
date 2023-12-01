import React from "react";
import HomePage from "./components/HomePage";
import CartPage from "./components/Cart/CartPage";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import CheckoutPaymentPage from "./components/Checkout-Payment/CheckoutPaymentPage";
import CheckoutReviewPage from "./components/Checkout-Review/CheckoutReviewPage";
import OrderConfirm from "./components/Checkout-Review/OrderConfirm";
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
            <Route path="/checkout-payment" element={<CheckoutPaymentPage/>}/>
            <Route path="/checkout-review" element={<CheckoutReviewPage/>}/>
            <Route path="/order-confirm" element={<OrderConfirm/>}/>
          </Routes> 
        </Router> 
        
      </div>
  );
}

export default App;
