import React from "react";
import NJLogo from "../Header/NJLogo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import basketHelper from "../../helpers/basketHelper";
import CheckoutLogin from "./CheckoutLogin";
import CheckoutShipping from "./CheckoutShipping";
import CheckoutShippingMethod from "./CheckoutShippingMethod";
import CheckoutSummary from "./CheckoutSummary";
import Footer from '../Footer/Footer';
import "../../css/checkout/checkout.css";

function CheckoutPage() {
    var [basket, setBasket] = React.useState({});
    var shippingButton = React.createRef();
    var emailAddressButton = React.createRef();
    var emailAddressInput = React.createRef();
    React.useEffect(function() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasket(currentBasket);
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [basket.id, basket.totalPrice]);
    function shippingMethodChangeHandler(shipMethodData) {
        basketHelper.shippingMethodChangeNetPrice(shipMethodData);
        var currentData = basketHelper.getBasket();
        if (currentData) {
            setBasket(currentData);
        }
    }
    return (
        <div className="checkout-page-main">
            <div className="checkout-logo">
                <NJLogo/>
            </div>
            <div className="checkout-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={7}>
                            <div className="checkout-login"><CheckoutLogin emailaddressbutton={emailAddressButton} basketData={basket} emailref={emailAddressInput}/></div>
                            <div className="checkout-shipping"><CheckoutShipping shippingbuttonref={shippingButton} shippingAddress={basket.shippingAddress} emailrefinput={emailAddressInput}/></div>
                            <div className="checkout-shipping-method"><CheckoutShippingMethod shippingmethodchangehandler={shippingMethodChangeHandler} selectedshippingmethod={basket.shippingMethod}/></div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5}>
                            <div className="checkout-summary"><CheckoutSummary basketData={basket} shippingbuttonref={shippingButton} emailaddressbutton={emailAddressButton}/></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default CheckoutPage;