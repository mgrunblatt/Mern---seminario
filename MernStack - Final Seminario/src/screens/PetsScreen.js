import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import PetList from '../components/pets/PetList';
import LoggedPetNavbar from "../components/LoggedPetNavbar";

function PetsScreen() {
    
  return (
      <div className="container">
        <LoggedPetNavbar />
        <br/>
        <PetList />
      </div>
  );
}

export default PetsScreen;