import React from "react";
import NJLogo from './NJLogo';
import Menu from './Menu';
import MiniCart from "../Cart/MiniCart";
import basketHelper from '../../helpers/basketHelper';
import CartIcon from "../Cart/CartIcon";

function HeaderUtility(props) {
    function productRemoveBasketHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.count;
            data.id = currentBasket.id;
            data.totalPrice = currentBasket.totalPrice;
            props.setBasketData(data);
        }
    }
    
    return (
        <div className="Header">
            <div className="d-flex justify-content-around">
                <div className="contact-us-link"><a href="*" className="link-secondary" style={{'textDecoration': 'none'}}>Contact Us</a></div>
                <div className="logo"><NJLogo/></div>
                <CartIcon basketData={props.basketData} setBasketData={props.setBasketData} iscartpage={props.iscartpage}/>
                {!props.iscartpage ? 
                    <MiniCart basketData={props.basketData} productRemoveBasketHandler={productRemoveBasketHandler}/> : ""}
            </div>
            <div className="Menu">
                <Menu/>
            </div>
        </div>
    )
}

export default HeaderUtility;