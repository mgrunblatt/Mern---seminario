import React from "react";
import { Link } from "react-router-dom";

const ProductListItem = ({product}) => (
    <tr>
        <td>{product.product}</td>
        <td>{product.description}</td>
        <td>{product.quantity}</td>
        <td>{product.brand}</td>
        
    </tr>
);

export default ProductListItem;