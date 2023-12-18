import React from "react";
import '../../css/Discover.css'

function DiscoverProducts() {
    return (
        <div class="site-section">
            <div class="title-section mb-5">
                <h2 class="text-uppercase"><span class="d-block">Discover</span> The Collections</h2>
            </div>
            <div class="row align-items-stretch">
            <div class="col-lg-8">
                <div class="product-item sm-height full-height bg-gray">
                    <a href="/products/women-clothing" class="product-category">Women</a>
                    <img src={require('../../images/model_4.png')} alt="" class="img-fluid"/>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="product-item sm-height bg-gray mb-4">
                    <a href="/products/mens-clothing" class="product-category">Men</a>
                    <img src={require('../../images/model_5.png')} alt="" class="img-fluid"/>
                </div>

                <div class="product-item sm-height bg-gray">
                    <a href="/products/jewellery" class="product-category">Jewellery</a>
                    <img src={require('../../images/jewellery-green.png')} alt="" class="img-fluid"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DiscoverProducts