import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import basketHelper from "../../helpers/basketHelper";

function CartIcon(props) {
    function miniCartButtonHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.products.length;
            data.id = Math.floor(Math.random() * 9999);
            props.setBasketData(data);
        }
    }
    return (
        <div className="cart-icon align-self-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasRight" onClick={miniCartButtonHandler}>
            <FontAwesomeIcon icon={faBagShopping} />
            {props.basketData && props.basketData.count > 0  ? <span className='badge badge-warning' id='lblCartCount'>{props.basketData.count}</span> : ""}
        </div>
    )
    
    
}

export default CartIcon;