import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";
import basketHelper from "../../helpers/basketHelper";

function AllProducts() {
    var [basket, setBasket] = React.useState({});
    function onLoadHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasket(currentBasket);
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    return (
        <div className="mens-clothing-main" onLoad={onLoadHandler}>
            <HeaderUtility basketData={basket} setBasketData={setBasket}/>
            <ProductListing category={"Mens Clothing"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;