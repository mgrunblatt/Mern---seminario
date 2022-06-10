import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import BookingList from '../components/booking/BookingList';
import LoggedBookingNavbar from "../components/LoggedBookingNavbar";

function PetsScreen() {
    
  return (
      <div className="container">
        <LoggedBookingNavbar />
        <br/>
        <BookingList />
      </div>
  );
}

export default PetsScreen;