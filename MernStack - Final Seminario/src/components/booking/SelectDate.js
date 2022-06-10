import React, { Component } from "react";
import { fetchTimesByDate } from "../../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import LocalStorage from "../../services/LocalStorage"
import HourSelection  from "./HourSelection";
import { Link } from "react-router-dom";


export default class SelectDate extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            days: [],
            selectedDate: LocalStorage.getObject("selectedDate")
        };
    }

    componentDidMount() {
        console.log("DAYS!!:" + this.state.selectedDate);  
    
        fetchTimesByDate(this.state.selectedDate)
        .then(days => { let daysArr = Object.values(days);
            
            const filterData = daysArr
                            .filter(day => day.reserved == false)
                            .map(day => day.hour);
            console.log("FILTRADO", filterData);

            this.setState({days: filterData});

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
        

        window.location.replace('/createBooking')
    }

    render(){
        
        return(
        <div className="container">
            <h3>Elija un horario de los disponibles</h3>
            <form onSubmit={this.onSubmit}>
            <table className="table">
                    <tbody>
                        <HourSelection availableHours={this.state.days}/>
                        <div className="form-group">
                            <input type="submit" value="Seleccionar" className="btn btn-warning" />
                        </div>
                    </tbody>
                </table>
            </form>    
        </div>    
        )
    }
}