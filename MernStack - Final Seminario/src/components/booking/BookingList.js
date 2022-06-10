import React, { Component } from "react";
import { fetchBookingsByUsername } from "../../fetchdata";
import LocalStorage from "../../services/LocalStorage";
import { Link } from 'react-router-dom';
import { fetchTimesByDate } from "../../fetchdata";

import axios from 'axios';


const formatDate = (rawDate)=>{
    const date = new Date(rawDate);
    console.log(" ESTA FECHA ", date);
    return [
        (date.getDate()+1).toString().padStart(2, '0'),
        (date.getMonth()+1).toString().padStart(2, '0'),
        date.getFullYear().toString().padStart(2, '0')
    ].join("/");
}

const Booking = props => (
    
    <tr>
        <td>{formatDate(props.booking.date)}</td>
        <td>{(props.booking.hour)+":00 Hs."}</td>
        <td>{props.booking.petName}</td>
        <td>{props.booking.treatment}</td>
        <td>{props.booking.nameOwner}</td>
        <td>
            <a href="#" onClick={() => {props.deleteBooking(props.booking._id, props.booking.date, props.booking.hour) }}>Cancelar turno</a>
        </td>
    </tr>
);

export default class BookingList extends Component {
    constructor(props) {
        super(props);

        this.deleteBooking = this.deleteBooking.bind(this);

        this.state = {
            bookings: [],
            selectedDate: LocalStorage.getObject("selectedDate"),
            selectedUser: LocalStorage.getObject("selectedUser")
        };
    }

    componentDidMount() {
        fetchBookingsByUsername(this.state.selectedUser.username)
            .then(bookings => this.setState({ bookings: bookings }));

    }

    deleteBooking(id, date, hour) {
        axios.delete('http://localhost:5000/booking/'+id)
            .then(res => console.log(res.data));

        const booking = {
            reserved: false
        }    
        console.log("A VER ID", id);
        fetchTimesByDate(date)
        .then(days => { let daysArr = Object.values(days);
            
            const filterData = daysArr
                            .filter(day => day.hour == hour);
            console.log("FILTRADO", filterData);
            
            console.log("A VER ID", filterData[0]._id);

            axios.post('http://localhost:5000/days/update/'+filterData[0]._id, booking)
            .then(res => console.log(res.data));

        })

        this.setState({
            bookings: this.state.bookings.filter(el => el._id !== id)
        }) 
    }

    renderBookings() {
        return this.state.bookings.sort((a, b) => a.currentbooking > b.currentbooking ? 1 : -1).map(currentbooking => {
            return <Booking booking={currentbooking} deleteBooking={this.deleteBooking} key={currentbooking._id} />;
        })
    }

    render() {
        return (
            <>
                <h3>Reservas</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Día</th>
                            <th>Hora</th>
                            <th>Nombre de la mascota</th>
                            <th>Tratamiento</th>
                            <th>Nombre del dueño</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBookings()}
                    </tbody>
                </table>
            </>
        );
    }
}