import React, { Component } from "react";
import { fetchUserProductsByUsername } from "../../fetchdata";
import LocalStorage from "../../services/LocalStorage";
import ProductListItem from './ProductListItem';

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedUser: LocalStorage.getObject("selectedUser")
        };
    }

    componentDidMount() {
        fetchUserProductsByUsername(this.state.selectedUser.username)
            .then(products => this.setState({ products: products }));

    }

    renderProducts() {
        return this.state.products?.map(currentproduct => {
            return <ProductListItem product={currentproduct} key={currentproduct._id} />;
        })
    }

    render() {
        return (
            <>
                <h3>Productos</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Producto</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Marca</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>
                </table>
            </>
        );
    }
}