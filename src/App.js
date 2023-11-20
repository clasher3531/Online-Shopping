import React from "react";
import LoadingOverlay from "react-loading-overlay";
import ProductListing from './components/ProductListing';
import HeroCarousel from './components/HeroCarousel';
import HeaderUtility from './components/Header/HeaderUtility';
import DarkBackground from "./components/DarkBackground";
import {connect} from 'react-redux';
import './App.css';

function App(props) {
    return (
      <div className='App'>
        <DarkBackground disappear={props.isActive}>
          <LoadingOverlay
            active={props.isActive}
            spinner={true}
            text="Loading your content..."
          ></LoadingOverlay>
        </DarkBackground>
        <HeaderUtility/>
        <HeroCarousel/>
        <ProductListing/>
      </div>
  );
}

const mapStateToProps = state => {
  return {
      isActive:  state.isLoading
  }
}

export default connect(mapStateToProps)(App);
