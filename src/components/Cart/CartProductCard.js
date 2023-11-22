import React from "react";

function CartProductCard(props) {
    return (
        <div className="cart-product-card">
            <table style={{width: '100%',borderCollapse: 'collapse', borderSpacing:'0', backgroundColor: "#F2F2F2", marginTop: "20px", textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td rowSpan="3" style={{backgroundColor: "white", width: "100px"}}><img src={props.image} width="200px" height="200px" alt=""/></td>
                        <th>{props.title}<button style={{borderRadius: "50%", border: "1px", float: "right", marginRight: "15px"}}>X</button></th>
                    </tr>
                    <tr>
                        <td>Price:&nbsp;INR&nbsp;{props.price}</td>
                    </tr>
                    <tr>
                        <td>Qty:&nbsp;{props.qty}</td>
                    </tr>
                </tbody>
            </table><br></br>
        </div>
    )
}

export default CartProductCard;