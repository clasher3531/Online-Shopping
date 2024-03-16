import React from "react";
import {getBasket} from "../../helpers/basketHelper";
import HeaderUtility from "../Header/HeaderUtility";
import ConfirmationSummary from "./ConfirmationSummary";
import {useLocation} from 'react-router-dom';
import Footer from '../Footer/Footer';
import "../../css/checkout-payment/checkoutPayment.css";

function OrderConfirm() {
    var [basketData, setBasketData] = React.useState({});
    var location = useLocation();
    var orderNo = location.state;
    function onLoadHandler() {
        getBasket().then((currentBasket)=>{
            if (currentBasket) {
                setBasketData(currentBasket);
            }
        }).catch((e) => {
            return null
        })
    }
    return (
        <div className="order-confirm" onLoad={onLoadHandler}>
            <HeaderUtility basketData={basketData} setBasketData={setBasketData}/>
            <ConfirmationSummary orderNo={orderNo}/>
            <Footer/>
        </div>
    )
}

export default OrderConfirm