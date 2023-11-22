import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import basketHelper from "../../helpers/basketHelper";
import HeaderUtility from "../Header/HeaderUtility";
import CartProductList from "../Cart/CartProductList";
import CartPageHeading from "./CartPageHeading";
import CartPageSubTotal from "./CartPageSubTotal";

function CartPage() {
    var [basket, setBasket] = React.useState({});
    React.useEffect(function() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.count;
            data.id = currentBasket.id;
            data.totalPrice = currentBasket.totalPrice;
            setBasket(data);
        }
    }, [basket.id, basket.totalPrice]);
    function cartProductRemoveBasketHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            var data = {}
            data.products = currentBasket.products;
            data.count = currentBasket.count;
            data.id = currentBasket.id;
            data.totalPrice = currentBasket.totalPrice;
            setBasket(data);
        }
    }
    return (
        <div className="cartPage">
            <HeaderUtility basketData={basket} setBasketData={setBasket} iscartpage={true}/><hr/>
            <CartPageHeading count={basket.count}/>
            <Container>
            <Row>
                <Col xs={12} md={7} lg={8}>
                    <div className="cartPage-main">
                        {basket && basket.products && basket.products.length > 0 ? <CartProductList basketData={basket} cartProductRemoveBasketHandler={cartProductRemoveBasketHandler}/>:<p style={{fontWeight:"500"}}>No Items in the cart</p>}
                    </div>
                </Col>
                <Col xs={12} md={5} lg={4}>
                    <CartPageSubTotal totalPrice={basket.totalPrice} count={basket.count}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default CartPage;