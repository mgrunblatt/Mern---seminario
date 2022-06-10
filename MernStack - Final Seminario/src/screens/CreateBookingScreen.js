import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateBooking from "../components/booking/CreateBooking";
import LoggedBookingNavbar from "../components/LoggedBookingNavbar";


function CreateBookingScreen() {
    
  return (
      <div className="container">
        <LoggedBookingNavbar />
        <br/>
        <CreateBooking/>
      </div>
  );
}

export default CreateBookingScreen;