import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import DateBooking from '../components/booking/DateBooking';
import LoggedBookingNavbar from "../components/LoggedBookingNavbar";
import { ToastContainer } from 'react-toastify'

function DatePickerScreen() {
    
  return (
      <div className="container">
        <LoggedBookingNavbar />
        <br/>
        <ToastContainer/>
        <DateBooking />
      </div>
  );
}

export default DatePickerScreen;