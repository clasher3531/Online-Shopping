import React from "react";

function CartPageHeading(props) {
    return (
        <div className="d-flex justify-content-start flex cartpage-heading" style={{marginTop:"5rem", marginBottom:"6rem", fontSize:"35px", fontWeight:"200"}}>
            <div style={{marginRight:"3px"}}><h1>Shopping Bag</h1></div>
            <div>{"(" + (props.count > 1 ? props.count + " Items" : "1 Item") + ")"}</div>
        </div>
    )
}

export default CartPageHeading;