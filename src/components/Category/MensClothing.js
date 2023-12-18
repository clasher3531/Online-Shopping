import React from "react";
import ProductListing from "../ProductListing";
import HeaderUtility from "../Header/HeaderUtility";
import Footer from "../Footer/Footer";

function AllProducts() {
    return (
        <div className="mens-clothing-main">
            <HeaderUtility/>
            <ProductListing category={"Mens Clothing"}/>
            <Footer/>
        </div>
    )
}

export default AllProducts;