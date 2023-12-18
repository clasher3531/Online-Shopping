import React from "react";
import CheckoutShippingSummary from "../Checkout-Payment/CheckoutShippingSummary";
import basketHelper from "../../helpers/basketHelper";
import NJLogo from "../Header/NJLogo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutSummary from "../Checkout/CheckoutSummary";
import CheckoutPaymentSummary from "./CheckoutPaymentSummary";
import Footer from '../Footer/Footer';
import "../../css/checkout-payment/checkoutPayment.css";

function CheckoutReviewPage() {
    var [basket, setBasket] = React.useState({});
    React.useEffect(function() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasket(currentBasket);
        }
    }, [basket.id, basket.totalPrice]);
    return (
        <div className="checkout-payment-page-main">
            <div className="checkout-logo">
                <NJLogo/>
            </div>
            <div className="checkout-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={7}>
                            <div className="checkout-shipping-summary"><CheckoutShippingSummary shippingAddress={basket && basket.shippingAddress ? basket.shippingAddress : ""} shippingMethod={basket && basket.shippingMethod ? basket.shippingMethod : ""} isReviewPage={true}/></div>
                            <div className="checkout-payment-summary"><CheckoutPaymentSummary payment={basket && basket.payment ? basket.payment : ""}/></div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <div className="checkout-summary"><CheckoutSummary basketData={basket} isPaymentPage={true} isReviewPage={true}/></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default CheckoutReviewPage;