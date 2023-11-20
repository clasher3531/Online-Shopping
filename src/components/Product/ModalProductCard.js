import React from "react";

function ModalProductCard(props) {
    return (
        <div className="product-card">
            <table style={{width: '100%',borderCollapse: 'collapse', borderSpacing:'0', backgroundColor: "#F2F2F2", marginTop: "20px", textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td rowSpan="3" style={{backgroundColor: "white", width: "100px"}}><img src={props.image} width="200px" height="200px" alt=""/></td>
                        <th>{props.title}</th>
                    </tr>
                    <tr>
                        <td>Price:&nbsp;Rs.&nbsp;{props.price}</td>
                    </tr>
                    <tr>
                        <td>Qty: 1</td>
                    </tr>
                </tbody>
            </table><br></br>
        </div>
    )
}

export default ModalProductCard