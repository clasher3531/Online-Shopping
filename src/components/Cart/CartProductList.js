import React from "react";
import CartProductCard from "./CartProductCard";

function CartProductList(props) {
    return (
        <div className="cart-product-container">
            {props.basketData.products.map((product) => {
                return <div key={product.id}><CartProductCard id={product.id} image={product.image} title={product.title} price={product.price} qty={product.qty}/></div>
            })}
        </div>
    )
}

export default CartProductList;