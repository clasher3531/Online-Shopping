import React from 'react';
import basketHelper from '../../helpers/basketHelper';
import getProduct from '../../helpers/productHelper';
function ProductCard(props) {
    function addToCartButtonClickHandler() {
        var product = getProduct(props.id);
        var basket = basketHelper.getOrNewBasket();
        basketHelper.addProductToBasket(basket, product);
    }
    return (
        <div className="card text-center" style={{width: '18rem', height: '30rem', margin: '10px', position: 'relative'}}>
            <img className="card-img-top"src={props.image} alt="" width="400px" height="300px"/>
            <div className="card-body">
                <h5 className="card-title" style={{fontSize: '15px'}}>{props.title}</h5>
                <h5 className="card-price" style={{fontSize: '15px', marginTop: '18px'}}>Rs.&nbsp;{props.price}</h5>
                <button type="button" className="btn btn-secondary" onClick={addToCartButtonClickHandler} style={{ position: 'absolute', bottom: '18px', right: '5rem'}}>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;