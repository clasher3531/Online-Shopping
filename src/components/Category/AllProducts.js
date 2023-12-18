import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";

function AllProducts() {
    return (
        <div className="all-products-main">
            <HeaderUtility/>
            <ProductListing category={"All Products"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;