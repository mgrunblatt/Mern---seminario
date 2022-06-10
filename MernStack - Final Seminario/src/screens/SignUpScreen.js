import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateUser from "../components/CreateUser";
import UnloggedNavbar from "../components/UnloggedNavbar";


function SignUpScreen() {
    
  return (
      <div className="container">
        <UnloggedNavbar />
        <br/>
        <CreateUser/>
      </div>
  );
}

export default SignUpScreen;
