import React from "react";
import Button from 'react-bootstrap/Button';

function CartPageSubTotal(props) {
    return (
        <div className="cartpage-subtotal" style={{border:"2px solid grey", width:"20rem", height:"12rem", marginTop:"1rem", marginLeft:"4rem", padding:"20px 30px 20px 30px"}}>
            <div className="subtotal-section">
                <div className="d-flex justify-content-between" style={{margin:"10px 2px 10px 2px"}}>
                    <div style={{fontWeight:"700"}}>SUBTOTAL</div>
                    <div style={{fontWeight:"700"}}>INR&nbsp;{props.totalPrice}</div>
                </div>
                <div className="d-flex justify-content-between" style={{margin:"10px 2px 10px 2px"}}>
                    <div>Sales Tax</div>
                    <div>INR 0</div>
                </div>
            </div>
            {props.count > 0 ? <div className="proceed-checkout-button" style={{margin:"30px 2px 10px 2px"}}>
                <Button variant="secondary" style={{width:"16rem"}}>PROCEED TO CHECKOUT</Button>
            </div>: ""}
        </div>
    )
}

export default CartPageSubTotal;