import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import HomePage from '../components/HomePage';
import LoggedPetNavbar from "../components/LoggedPetNavbar";

function HomeScreen() {
    
  return (
      <div className="container">
        <LoggedPetNavbar />
        <br/>
        <HomePage />
      </div>
  );
}

export default HomeScreen;