import ProductCard from './Product/ProductCard';
import React from 'react';
import ProductData from '../Config/Products.json';

function getProductData() {
    return ProductData;
}

function ProductListing() {
    var products = getProductData();
    return (
        <div className="container">
            <div className="row">
                {products.map((product) => {
                    return <div key={product.id} className="col-sm-6 col-md-4 col-lg-3"><ProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price}/></div>
                })}
            </div>
        </div>
    )
}

export default ProductListing;