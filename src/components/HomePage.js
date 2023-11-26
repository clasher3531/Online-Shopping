import React from "react";
import ProductListing from '../components/ProductListing';
import HeroCarousel from '../components/HeroCarousel';
import HeaderUtility from '../components/Header/HeaderUtility';
import basketHelper from '../helpers/basketHelper';

function HomePage(props) {
    var [basketData, setBasketData] = React.useState({});
    function onLoadHandler() {
      var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasketData(currentBasket);
        }
    }
    return (
        <div className="homePage" onLoad={onLoadHandler}>
            <HeaderUtility basketData={basketData} setBasketData={setBasketData}/>
            <HeroCarousel/>
            <ProductListing/>
        </div>
    )
}

export default HomePage;