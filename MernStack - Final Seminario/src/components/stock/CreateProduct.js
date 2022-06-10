import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage";


export default class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: LocalStorage.getObject("selectedUser").username,
            product: '',
            description: '',
            quantity: '',
            brand: '',
            products: []
        }
    }

    onChangeProductname(e) {
        this.setState({
            product: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const product = {
            username: this.state.username,
            product: this.state.product,
            description: this.state.description,
            quantity: this.state.quantity,
            brand: this.state.brand,
        }

        console.log(product);

        axios.post('http://localhost:5000/products/add/', product)
            .then(res => console.log(res.data));

        window.location = '/productsList';
    }

    render() {
        return (
            <>
                <h3>Crear un nuevo producto</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre del producto: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.product}
                            onChange={this.onChangeProductname}
                        />

                    </div>
                    <div className="form-group">
                        <label>Descripción del producto: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />

                    </div>
                    <div className="form-group">
                        <label>Cantidad: </label>
                        <input type="number"
                            required
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                        />

                    </div>
                    <div className="form-group">
                        <label>Marca del producto: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Crear producto" className="btn btn-warning" />
                    </div>
                </form>
            </>
        )
    }
}