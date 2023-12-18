import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";

function AllProducts() {
    return (
        <div className="electronics-main">
            <HeaderUtility/>
            <ProductListing category={"Electronics"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;