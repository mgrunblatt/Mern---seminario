import React, { Component } from "react";
import { fetchUserProducts } from "../../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage"


export default class ProductAddStock extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchUserProducts()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data,
                        selectedUser: response.data[0]
                    });
                      
                }
                console.log("USER!!:" + response.data[0]?.product);  
            })   
    }

    onChangeUser(e) {
        const product = e.target.value;
        console.log("Product Selected!!:" + product);
        const user = this.state.users.find(user => user.product === product)

        console.log("USER Selected!!:" + user.product);
        
        this.setState({
            selectedUser: user
        });
    }

    onSubmit(e) {
        e.preventDefault();
    

        LocalStorage.setObject("selectedProduct", this.state.selectedUser)
        

        window.location.replace('/addStock')
    }


    render(){
        return(
        <div className="container">
            <h3>Elija el producto para reponer</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Producto: </label>
                    <select ref={this.myRef}
                        required
                        className="form-control"
                        value={this.state.selectedUser?.product}
                        onChange={this.onChangeUser}>
                        {
                            this.state.users.map(function(user){
                                return <option
                                  key={user.id}
                                  value={user.product}>{user.product}
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