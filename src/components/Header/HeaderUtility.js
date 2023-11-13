import React from "react";
import NJLogo from './NJLogo';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import MiniCart from "../Cart/MiniCart";
import basketHelper from '../../helpers/basketHelper';

function HeaderUtility() {
    var [basketData, setBasketData] = React.useState({});
    function miniCartButtonHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.products.length;
            data.id = Math.floor(Math.random() * 9999);
            setBasketData(data);
        }
    }

    function productRemoveBasketHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.products.length;
            data.id = basketData.id;
            setBasketData(data);
        }
    }
    
    return (
        <div className="Header">
            <div className="d-flex justify-content-around">
                <div className="contact-us-link"><a href="*" className="link-secondary" style={{'textDecoration': 'none'}}>Contact Us</a></div>
                <div className="logo"><NJLogo/></div>
                <div className="cart-icon align-self-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasRight" onClick={miniCartButtonHandler}><FontAwesomeIcon icon={faBagShopping} /></div>
                <MiniCart basketData={basketData} productRemoveBasketHandler={productRemoveBasketHandler}/>
            </div>
            <div className="Menu">
                <Menu/>
            </div>
        </div>
    )
}

export default HeaderUtility;