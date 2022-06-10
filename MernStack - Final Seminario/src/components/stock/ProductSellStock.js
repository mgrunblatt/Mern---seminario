import React, { Component } from "react";
import { fetchUserProducts } from "../../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage"


export default class StockListScreen extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetchUserProducts()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        products: response.data,
                        selectedProduct: response.data[0]
                    });
                      
                }
                console.log("USER!!:" + response.data[0]?.product);  
            })   
    }

    onChangeProduct(e) {
        const product = e.target.value;
        console.log("Product Selected!!:" + product);
        const item = this.state.products.find(item => item.product === product)

        console.log("USER Selected!!:" + item.product);
        
        this.setState({
            selectedProduct: item
        });
    }

    onSubmit(e) {
        e.preventDefault();
    

        LocalStorage.setObject("selectedProduct", this.state.selectedProduct)
        

        window.location.replace('/sellStock')
    }


    render(){
        return(
        <div className="container">
            <h3>Elija el producto para descontar</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Producto: </label>
                    <select ref={this.myRef}
                        required
                        className="form-control"
                        value={this.state.selectedProduct?.product}
                        onChange={this.onChangeProduct}>
                        {
                            this.state.products.map(function(product){
                                return <option
                                  key={product.id}
                                  value={product.product}>{product.product}
                                  </option>;
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" value="Seleccionar" className="btn btn-warning"/>
                </div>
            </form>
        </div>    
        )
    }
}