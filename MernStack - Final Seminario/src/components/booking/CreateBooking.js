import React, { Component } from "react";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage";
import { fetchUserPets } from "../../fetchdata";


export default class CreateBooking extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.onChangeTreatment = this.onChangeTreatment.bind(this);
        this.onChangePetName = this.onChangePetName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: LocalStorage.getObject("selectedUser").username, 
            date: LocalStorage.getObject("selectedDate"),
            hour: LocalStorage.getObject("selectedHour"),
            petName: '',
            treatment: '',
            nameOwner: '',
            pets: []
        }
    }

    componentDidMount() {
        fetchUserPets()
            .then(response => {
                if(response.data.length > 0){
                    this.setState({
                        pets: response.data,
                        selectedPet: response.data[0].name,
                        selectedOwner:response.data[0].nameOwner
                    });
                      
                }
            })   
    }

    onChangeTreatment(e) {
        this.setState({
            treatment: e.target.value
        });
    }

    onChangePetName(e) {
        const name = e.target.value;
        console.log("PET Selected!!:" + name);
        const pet = this.state.pets.find(pet => pet.name == name)
        console.log("PET FINDED!!:" + pet);
        console.log("PET FINDED name!!:" + pet.name);
        console.log("PET FINDED Owner!!:" + pet.nameOwner);
        this.setState({
            selectedPet: pet.name, 
            selectedOwner: pet.nameOwner
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const booking = {
            username: this.state.username,
            date: this.state.date,
            hour: this.state.hour,
            treatment: this.state.treatment,
            petName: this.state.selectedPet,
            nameOwner: this.state.selectedOwner,
        }

        console.log("BOOKING", booking);

        axios.post('http://localhost:5000/booking/add/', booking)
            .then(res => {
                console.log(res.data);
                window.location = '/bookings';
            });
        
    }

    render() {
        return (
            <>
                <h3>Crear reserva de turno</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Fecha: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.date}
                        />

                    </div>
                    <div className="form-group">
                        <label>Hora de la reserva: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={(this.state.hour)+":00 Hs."}
                        />

                    </div>
                    <div className="form-group">
                        <label>Tipo de atención o tratamiento: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.treatment}
                            onChange={this.onChangeTreatment}
                        />

                    </div>

                    <div className="form-group">
                        <label>Nombre de la mascota: </label>
                        <select ref={this.myRef}
                        required
                        className="form-control"
                        value={this.state.selectedPet}
                        onChange={this.onChangePetName}>
                        {
                            this.state.pets.map(function(pet){
                                return <option
                                  key={pet.id}
                                  value={pet.name}>{pet.name}
                                  </option>;
                            })
                        }
                        </select>

                    </div>
                    <div className="form-group">
                        <label>Nombre del dueño: </label>
                        <input type="text"
                            required
                            className="form-control"
                            defaultValue={this.state.selectedOwner}
                            
                        />


                    </div>

                    <div className="form-group">
                        <input type="submit" value="Crear reserva" className="btn btn-warning" />
                    </div>
                </form>
            </>
        )
    }
}