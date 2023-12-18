import React from "react";
import HeroCarousel from './HeroMain';
import HeaderUtility from '../components/Header/HeaderUtility';
import basketHelper from '../helpers/basketHelper';
import Footer from "./Footer/Footer";
import Campaign from "./Header/Campaign";
import WhyShoppingUs from "./HomePage/WhyShoppingUs";
import NewArrivals from "./HomePage/NewArrivals";
import FeaturedProducts from "./HomePage/FeaturedProducts";
import DiscoverProducts from "./HomePage/DiscoverProducts";
import '../css/HomePage.css';

function HomePage() {
    var [basketData, setBasketData] = React.useState({});
    function onLoadHandler() {
      var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasketData(currentBasket);
        }
    }
    return (
        <div className="homePage" onLoad={onLoadHandler}>
            <Campaign/>
            <HeaderUtility basketData={basketData} setBasketData={setBasketData}/>
            <HeroCarousel/>
            <WhyShoppingUs/>
            <NewArrivals/>
            <FeaturedProducts/>
            <DiscoverProducts/>
            <Footer/>
        </div>
    )
}

export default HomePage;