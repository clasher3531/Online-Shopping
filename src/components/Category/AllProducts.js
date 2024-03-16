import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";
import {getBasket} from "../../helpers/basketHelper";

function AllProducts() {
    var [basket, setBasket] = React.useState({});
    function onLoadHandler() {
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                setBasket(currentBasket);
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }
        }).catch((e) => {
            return null
        })
    }
    return (
        <div className="all-products-main" onLoad={onLoadHandler}>
            <HeaderUtility basketData={basket} setBasketData={setBasket}/>
            <ProductListing category={"All Products"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;