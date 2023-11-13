import React from "react";
import MiniCartProduct from "../Product/MiniCartProduct";

function MiniCart(props) {
    return (
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Shopping Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {props.basketData && props.basketData.products && props.basketData.products.length > 0 ? <MiniCartProduct basketData={props.basketData} productRemoveBasketHandler={props.productRemoveBasketHandler}/> : <p>No items are available in the cart</p>}
            </div>
        </div>
    )
}

export default MiniCart;