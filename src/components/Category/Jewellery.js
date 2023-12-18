import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";

function AllProducts() {
    return (
        <div className="jewellery-main">
            <HeaderUtility/>
            <ProductListing category={"Jewellery"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;