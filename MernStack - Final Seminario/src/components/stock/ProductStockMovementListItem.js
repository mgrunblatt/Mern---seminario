import React from "react";

const formatStockQuantity = (quantity) => {
    const multiplier = (quantity < 0) ? -1 : 1;
    return (multiplier === -1 ? "- $" : "$") + (quantity * multiplier);
}

const formatDate = (rawDate)=>{
    const date = new Date(rawDate);
    return [
        date.getDate().toString().padStart(2, '0'),
        (date.getMonth()+1).toString().padStart(2, '0'),
        date.getFullYear().toString().padStart(2, '0')
    ].join("/") + " " + [
        date.getHours().toString().padStart(2, '0'),
        date.getMinutes().toString().padStart(2, '0'),
        date.getSeconds().toString().padStart(2, '0')
    ].join(":");
}

const ProductStockMovementListItem = ({ stockmovement }) => (

    <tr>
        <td>{stockmovement.movementType}</td>
        <td>{stockmovement.quantity}</td>
        <td>{stockmovement.stockBalance}</td>
        <td>{formatDate(stockmovement.date)}</td>
    </tr>
)

export default ProductStockMovementListItem;