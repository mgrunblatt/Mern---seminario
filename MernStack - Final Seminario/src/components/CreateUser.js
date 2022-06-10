import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            accounts: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add/', user)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <>
                <h3>Crear una nueva cuenta</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Usuario: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />

                    </div>
                    <div className="form-group">
                        <label>Contraseña: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Crear nuevo usuario" className="btn btn-warning" />
                    </div>
                </form>
            </>
        )
    }
}