import React from "react";
import CheckoutShippingSummary from "./CheckoutShippingSummary";
import basketHelper from "../../helpers/basketHelper";
import NJLogo from "../Header/NJLogo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutSummary from "../Checkout/CheckoutSummary";
import CheckoutBillingSection from "./CheckoutBillingSection";
import "../../css/checkout-payment/checkoutPayment.css";

function CheckoutPaymentPage() {
    var [basket, setBasket] = React.useState({});
    var paymentButtonRef = React.createRef();
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
                            <div className="checkout-shipping-summary"><CheckoutShippingSummary shippingAddress={basket && basket.shippingAddress ? basket.shippingAddress : []} shippingMethod={basket && basket.shippingMethod ? basket.shippingMethod : []}/></div>
                            <div className="checkout-payment-details"><CheckoutBillingSection paymentbuttonref={paymentButtonRef}/></div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <div className="checkout-summary"><CheckoutSummary basketData={basket} isPaymentPage={true} paymentbuttonref={paymentButtonRef}/></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CheckoutPaymentPage;