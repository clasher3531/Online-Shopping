import ProductCard from './Product/ProductCard';
import React from 'react';
import ProductData from '../Config/Products.json';
import { Row, Col } from 'react-bootstrap';
import '../css/ProductList.css'

function getProductData(category) {
    if (category !== 'All Products') {
        return ProductData.filter(function(product) {
            return product.category === category.toLowerCase();
        });
    }
    return ProductData;
}

function ProductListing(props) {
    var products = getProductData(props.category);
    return (
        <div className='productListing'>
            <h2>{props.category}</h2>
            <Row>
                {products.map((product) => {
                    return <Col xs={6} sm={6} md={6} lg={3} key={product.id}><ProductCard id={product.id} image={product.image} title={product.title} description={product.description} price={product.price}/></Col>
                })}
            </Row>
        </div>
        
    )
}

export default ProductListing;