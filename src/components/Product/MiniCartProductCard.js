import React from "react";
import basketHelper from "../../helpers/basketHelper";

function MiniCartProductCard(props) {
    function removeBasketProductHandler() {
        basketHelper.removeProductFromBasket(props.id);
        props.productRemoveBasketHandler();
    }
    return (
        <div className="product-card">
            <table style={{width: '100%',borderCollapse: 'collapse', borderSpacing:'0', backgroundColor: "#F2F2F2", textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td rowSpan="3" style={{backgroundColor: "white", width: "100px"}}><img src={props.image} width="100px" height="125px" alt=""/></td>
                        <th>{props.title}<button onClick={removeBasketProductHandler} style={{borderRadius: "50%", border: "1px", float: "right", marginRight: "5px"}}>X</button></th>
                    </tr>
                    <tr>
                        <td>INR&nbsp;{props.price}</td>
                    </tr>
                    <tr>
                        <td>Qty:&nbsp;{props.qty}</td>
                    </tr>
                </tbody>
            </table><br></br>
        </div>
    )
}

export default MiniCartProductCard;