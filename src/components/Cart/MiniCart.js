import React from "react";
import Button from 'react-bootstrap/Button';
import MiniCartProduct from "../Product/MiniCartProduct";

function MiniCart(props) {
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h3 className="offcanvas-title" id="offcanvasScrollingLabel">Shopping Cart{props.basketData && props.basketData.products && props.basketData.products.length > 0 ? '(' + props.basketData.products.length + ')' : ""}</h3>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div><hr></hr>
            <div className="offcanvas-body">
                {props.basketData && props.basketData.products && props.basketData.products.length > 0 ? <MiniCartProduct basketData={props.basketData} productRemoveBasketHandler={props.productRemoveBasketHandler}/> : <p>No items are available in the cart</p>}
            </div>
            {props.basketData && props.basketData.products && props.basketData.products.length > 0 ?
            <div className="proceed-checkout-button d-grid gap-2" style={{margin:"10px 10px 10px 10px"}}>
                <Button variant="secondary" size="lg">Proceed To Checkout</Button>
            </div> : ""}
        </div>
    )
}

export default MiniCart;