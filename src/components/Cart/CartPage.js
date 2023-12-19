import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import basketHelper from "../../helpers/basketHelper";
import HeaderUtility from "../Header/HeaderUtility";
import CartProductList from "../Cart/CartProductList";
import CartPageHeading from "./CartPageHeading";
import CartPageSubTotal from "./CartPageSubTotal";
import Footer from '../Footer/Footer';
import '../../css/Cart.css';

function CartPage() {
    var [basket, setBasket] = React.useState({});
    React.useEffect(function() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasket(currentBasket);
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [basket.id, basket.totalPrice]);
    function cartProductRemoveBasketHandler() {
        var currentBasket = basketHelper.getBasket();
        if (currentBasket) {
            setBasket(currentBasket);
        }
    }
    return (
        <div className="cartPage">
            <HeaderUtility basketData={basket} setBasketData={setBasket} iscartpage={true}/>
            <CartPageHeading count={basket.count}/>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={7}>
                        <div className="cartPage-main">
                            {basket && basket.products && basket.products.length > 0 ? <CartProductList basketData={basket} cartProductRemoveBasketHandler={cartProductRemoveBasketHandler}/>:<p style={{fontWeight:"500"}}>No Items in the cart</p>}
                        </div>
                    </Col>
                    <Col xs={12} sm ={12} md={12} lg={5}>
                        <CartPageSubTotal totalPrice={basket.totalPrice} count={basket.count} taxPrice={basket.taxPrice}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default CartPage;