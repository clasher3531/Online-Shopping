import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import basketHelper from "../../helpers/basketHelper";
import { useNavigate } from 'react-router-dom';

function CartIcon(props) {
    var navigate = useNavigate()
    function miniCartButtonHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.count;
            data.id = currentBasket.id;
            data.totalPrice = currentBasket.totalPrice;
            props.setBasketData(data);
        }
        if (props.iscartpage) {
            navigate('/cart')
        }
    }
    return (<div>
        {!props.iscartpage ? 
            <div className="cart-icon align-self-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasRight" onClick={miniCartButtonHandler}>
                <FontAwesomeIcon icon={faBagShopping} />
                {props.basketData && props.basketData.count > 0  ? <span className='badge badge-warning' id='lblCartCount'>{props.basketData.count}</span> : ""}
            </div> : 
            <div className="cart-icon align-self-start" onClick={miniCartButtonHandler}>
                <FontAwesomeIcon icon={faBagShopping} />
                {props.basketData && props.basketData.count > 0  ? <span className='badge badge-warning' id='lblCartCount'>{props.basketData.count}</span> : ""}
            </div>
        }</div>     
    )
    
    
}

export default CartIcon;