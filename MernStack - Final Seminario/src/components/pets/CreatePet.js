import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage";


export default class CreatePet extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangePetname = this.onChangePetname.bind(this);
        this.onChangeDni = this.onChangeDni.bind(this);
        this.onChangeNameOwner = this.onChangeNameOwner.bind(this);
        this.onChangeAnimal = this.onChangeAnimal.bind(this);
        this.onChangeRace = this.onChangeRace.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: LocalStorage.getObject("selectedUser").username,
            name: '',
            dni: '',
            nameOwner: '',
            animal: '',
            race: '',
            pets: []
        }
    }

    onChangePetname(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDni(e) {
        this.setState({
            dni: e.target.value
        });
    }

    onChangeNameOwner(e) {
        this.setState({
            nameOwner: e.target.value
        });
    }

    onChangeAnimal(e) {
        this.setState({
            animal: e.target.value
        });
    }

    onChangeRace(e) {
        this.setState({
            race: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const pet = {
            username: this.state.username,
            name: this.state.name,
            dni: this.state.dni,
            nameOwner: this.state.nameOwner,
            animal: this.state.animal,
            race: this.state.race,
        }

        console.log(pet);

        axios.post('http://localhost:5000/pets/add/', pet)
            .then(res => console.log(res.data));

        window.location = '/pets';
    }

    render() {
        return (
            <>
                <h3>Crear un nueva mascota</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre de la mascota: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangePetname}
                        />

                    </div>
                    <div className="form-group">
                        <label>DNI de la mascota: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.dni}
                            onChange={this.onChangeDni}
                        />

                    </div>
                    <div className="form-group">
                        <label>Nombre del dueño: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.nameOwner}
                            onChange={this.onChangeNameOwner}
                        />

                    </div>
                    <div className="form-group">
                        <label>Tipo de animal: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.animal}
                            onChange={this.onChangeAnimal}
                        />

                    </div>
                    <div className="form-group">
                        <label>Raza: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.race}
                            onChange={this.onChangeRace}
                        />

                    </div>

                    <div className="form-group">
                        <input type="submit" value="Crear mascota" className="btn btn-warning" />
                    </div>
                </form>
            </>
        )
    }
}