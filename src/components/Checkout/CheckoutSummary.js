import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartProductList from "../Cart/CartProductList";
import CheckoutSummarySubTotal from "./CheckoutSummarySubTotal";
import { useNavigate } from "react-router-dom";
import basketHelper from "../../helpers/basketHelper";
import orderHelper from "../../helpers/orderHelper";

function CheckoutSummary(props) {
    const navigate = useNavigate();
    function modifyButtonHandler() {
        navigate("/cart");
    }
    function proccedPaymentHandler() {
        props.emailaddressbutton.current.click();
        props.shippingbuttonref.current.click();
    }
    function proceedReviewHandler() {
        props.paymentbuttonref.current.click();
    }
    function placeOrderButtonHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var order = orderHelper.createOrder(currentBasket);
            if (order) {
                var authorizationResult = orderHelper.handlePayment(order);
                if (authorizationResult.success) {
                    navigate("/order-confirm", {state: order.orderNo});
                }
            }
        }
    }
    return (
        <div className="checkout-summary-main">
            <Row>
                <Col lg="8" sm="8" xs="8" md="8">
                    <h5>ORDER SUMMARY</h5>
                    <p>{props.basketData.count}&nbsp;Item</p>
                </Col>
                <Col lg="4" sm="4" xs="4" md="4">
                    <Button variant="secondary" onClick={modifyButtonHandler}>Modify</Button>
                </Col>
            </Row>
            <CartProductList basketData={props.basketData} isCheckoutPage={true}/>
            <CheckoutSummarySubTotal totalprice={props.basketData.totalPrice} shippingmethod={props.basketData.shippingMethod} shippingprice={props.basketData.shippingMethodPrice} totaltax={props.basketData.taxPrice} netprice={props.basketData.totalNetPrice}/>
            {props.basketData.count > 0 ? <div className="proceed-checkout-payment-details">
                {!props.isPaymentPage ? <Button variant="secondary" style={{width:"100%"}} onClick={proccedPaymentHandler}>PROCEED TO PAYMENT DETAILS</Button> : 
                !props.isReviewPage ? <Button variant="secondary" style={{width:"100%"}} onClick={proceedReviewHandler}>REVIEW YOUR ORDER</Button> : 
                <Button variant="secondary" style={{width:"100%"}} onClick={placeOrderButtonHandler}>PLACE YOUR ORDER</Button>}
            </div>: ""}
        </div>
    )
}

export default CheckoutSummary;