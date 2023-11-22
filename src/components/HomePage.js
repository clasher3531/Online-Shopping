import React from "react";
import LoadingOverlay from "react-loading-overlay";
import ProductListing from '../components/ProductListing';
import HeroCarousel from '../components/HeroCarousel';
import HeaderUtility from '../components/Header/HeaderUtility';
import DarkBackground from '../components/DarkBackground';
import basketHelper from '../helpers/basketHelper';

function HomePage(props) {
    var [basketData, setBasketData] = React.useState({});
    function onLoadHandler() {
      var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.count;
            data.id = currentBasket.id;
            data.totalPrice = currentBasket.totalPrice;
            setBasketData(data);
        }
    }
    return (
        <div className="homePage" onLoad={onLoadHandler}>
            <DarkBackground disappear={props.isActive}>
                <LoadingOverlay
                    active={props.isActive}
                    spinner={true}
                    text="Loading your content..."
                ></LoadingOverlay>
            </DarkBackground>
            <HeaderUtility basketData={basketData} setBasketData={setBasketData}/>
            <HeroCarousel/>
            <ProductListing/>
        </div>
    )
}

export default HomePage;