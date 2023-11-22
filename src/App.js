import React from "react";
import {connect} from 'react-redux';
import HomePage from "./components/HomePage";
import CartPage from "./components/Cart/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App(props) {
    return (
      <div className='App'>
        <Router> 
          <Routes> 
            <Route path="/" element={<HomePage isActive={props.isActive}/>}/>  
            <Route path="/cart" element={<CartPage/>}/>
          </Routes> 
        </Router> 
        
      </div>
  );
}

const mapStateToProps = state => {
  return {
      isActive:  state.isLoading
  }
}

export default connect(mapStateToProps)(App);
