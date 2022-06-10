import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage";


export default class AddStock extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: LocalStorage.getObject("selectedUser").username,
            productName: LocalStorage.getObject("selectedProduct").product,
            movementType: '',
            quantity: '',
            stockBalance: '',
            date: '',
            products: []
        }
    }


    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const stockMovement = {
            username: this.state.username,
            productName: this.state.productName,
            movementType: "Reposición",
            quantity: this.state.quantity,
            date: new Date()
        }

        console.log(stockMovement);

        axios.post('http://localhost:5000/stockMovements/add/', stockMovement)
            .then(res => {
                console.log(res.data);
                window.location = "/productsList";
            });

    }

    render() {
        return (
            <>
                <h3>Reposición de stock</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Cantidad a ingresar: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                        />

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Realizar reposición" className="btn btn-warning" />
                    </div>
                </form>
            </>
        )
    }
}