import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartProductList from "../Cart/CartProductList";
import CheckoutSummarySubTotal from "./CheckoutSummarySubTotal";
import { useNavigate } from "react-router-dom";

function CheckoutSummary(props) {
    const navigate = useNavigate();
    function modifyButtonHandler() {
        navigate("/cart");
    }
    function proccedPaymentHandler() {
        props.emailaddressbutton.current.click();
        props.shippingbuttonref.current.click();
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
                <Button variant="secondary" style={{width:"100%"}} onClick={proccedPaymentHandler}>PROCEED TO PAYMENT DETAILS</Button>
            </div>: ""}
        </div>
    )
}

export default CheckoutSummary;