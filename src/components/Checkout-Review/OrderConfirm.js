import React from "react";
import basketHelper from "../../helpers/basketHelper";
import HeaderUtility from "../Header/HeaderUtility";
import ConfirmationSummary from "./ConfirmationSummary";
import {useLocation} from 'react-router-dom';
import "../../css/checkout-payment/checkoutPayment.css";

function OrderConfirm() {
    var [basketData, setBasketData] = React.useState({});
    var location = useLocation();
    var orderNo = location.state;
    function onLoadHandler() {
      var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasketData(currentBasket);
        }
    }
    return (
        <div className="order-confirm" onLoad={onLoadHandler}>
            <HeaderUtility basketData={basketData} setBasketData={setBasketData}/>
            <ConfirmationSummary orderNo={orderNo}/>
        </div>
    )
}

export default OrderConfirm