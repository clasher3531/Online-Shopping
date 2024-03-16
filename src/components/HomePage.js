import React from "react";
import HeroCarousel from './HeroMain';
import HeaderUtility from '../components/Header/HeaderUtility';
import {getBasket} from '../helpers/basketHelper';
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
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                setBasketData(currentBasket);
            }
        }).catch((e) => {
            return null
        })
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