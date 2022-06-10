import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { fetchProductStockMovements } from "../../fetchdata";
import LocalStorage from "../../services/LocalStorage";
import ProductStockMovementListItem from "./ProductStockMovementListItem";

export default class ProductStockMovementList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stockmovements: [],
      selectedUser: LocalStorage.getObject("selectedUser")
    };
  }

  componentDidMount() {
    fetchProductStockMovements(this.state.selectedUser.username)
      .then(stockmovements => this.setState({ stockmovements: stockmovements }));
  }

  renderStockMovements() {
    return this.state.stockmovements?.sort((a, b) => a.stockmovement > b.stockmovement ? 1 : -1)
    .map(stockmovement => {
      return <ProductStockMovementListItem stockmovement={stockmovement} key={stockmovement._id} />;
    })
  }

  render() {
    return (
        <>
            <h3>Movimientos de stock</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Tipo de Movimiento</th>
                        <th>Cantidad</th>
                        <th>Stock total</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderStockMovements()}
                </tbody>
            </table>
        </>
    );
}
}