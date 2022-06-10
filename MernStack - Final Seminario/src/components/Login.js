import React, { Component } from "react";
import { fetchUsers } from "../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../services/LocalStorage";
import { toast } from 'react-toastify';


export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users: [],
            selectedUser: '',
            selectedPass: ''
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        users: response.data,
                        selectedUser: response.data[0]
                    });
                }
            })
    }

    onChangeUser(e) {
        const username = e.target.value;
        const user = this.state.users.find(user => user.username === username)
        console.log("USER!!", user);
        
        this.setState({
            selectedUser: user
        });
    }

    onChangePassword(e) {
        const password = e.target.value;
        const user = this.state.users.find(user => user.username === this.state.selectedUser.username)

        if (password === user.password) {
            this.setState({
                selectedPass: password
            });
        }
        
    }

    onSubmit(e) {
        e.preventDefault();
    

        LocalStorage.setObject("selectedUser", this.state.selectedUser)

        
        if (this.state.selectedUser.password === this.state.selectedPass) {
            window.location.replace('/home')     
        } else {
            toast.error("Wrong user or Password !", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        
    }


    render(){
        return(
        <div>
            <h3>Ingresar al sistema</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Usuario: </label>
                    <input type="text"
                            required
                            className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUser}
                        />
                </div>
                <div className="form-group">
                        <label>Contraseña: </label>
                        <input type="password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />

                </div>

                <div className="form-group">
                    <input type="submit" value="Acceder" className="btn btn-warning"/>
                </div>
            </form>
        </div>    
        )
    }
}