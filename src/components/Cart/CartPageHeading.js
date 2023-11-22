import React from "react";

function CartPageHeading(props) {
    return (
        <div className="d-flex justify-content-center flex cartpage-heading" style={{marginTop:"5rem", marginBottom:"6rem", textAlign:"center", fontSize:"30px", fontWeight:"200"}}>
            <div style={{marginRight:"3px"}}><h1>Shopping Bag</h1></div>
            <div>{"(" + (props.count > 0 ? props.count > 1 ? props.count + " Items" : "1 Item" : "0 Item") + ")"}</div>
        </div>
    )
}

export default CartPageHeading;