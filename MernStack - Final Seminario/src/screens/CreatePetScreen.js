import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreatePet from "../components/pets/CreatePet";
import LoggedPetNavbar from "../components/LoggedPetNavbar";


function CreatePetScreen() {
    
  return (
      <div className="container">
        <LoggedPetNavbar />
        <br/>
        <CreatePet/>
      </div>
  );
}

export default CreatePetScreen;