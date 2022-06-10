import React, { useState } from "react";
import { fetchUsers } from "../../fetchdata";
import "react-datepicker/dist/react-datepicker.css";
import {DatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';
import LocalStorage from "../../services/LocalStorage";
import { Link } from "react-router-dom";


const stripDate = (selectedDate) => {
    console.log("DAY", selectedDate.getDate().toString());
    console.log("MONTH", (selectedDate.getMonth()+1).toString());
    console.log("YEAR", selectedDate.getFullYear().toString());
    return [
        selectedDate.getFullYear().toString().padStart(2, '0'),
        (selectedDate.getMonth()+1).toString().padStart(2, '0'),
        selectedDate.getDate().toString().padStart(2, '0')
    ].join("-");
}

function DateBooking () {
    const [selectedDate, changeSelectedDate] = useState(new Date());


    console.log("Fecha", selectedDate);

    const stripedDate = stripDate(selectedDate);

    LocalStorage.setObject("selectedDate", stripedDate)

    console.log("NEW Fecha", stripedDate);

    

    return(
        <div className="contenedor">
            <h3>Elija una fecha para ver turnos disponibles.</h3>
            
            <div className="pt-4 display-5">
                <label>Fecha</label>
            </div>
            <div className="pt-4 display-5">
                <DatePicker className="text-center pt-4 display-4" value={selectedDate} onChange={changeSelectedDate}/> 
            </div>
            <div className="pt-4 display-5">
            <Link to= {"/selectTimes"}><input type="submit" value="Seleccionar" className="btn btn-warning"/></Link>
            </div>
            
        </div>    
    );
}

export default DateBooking;