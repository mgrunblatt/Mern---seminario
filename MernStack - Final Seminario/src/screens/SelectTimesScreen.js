import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import SelectDate from '../components/booking/SelectDate';
import LoggedBookingNavbar from "../components/LoggedBookingNavbar";

function SelectTimesScreen() {
    
  return (
      <div className="container">
        <LoggedBookingNavbar />
        <br/>
        <SelectDate />
      </div>
  );
}

export default SelectTimesScreen;