import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import UnloggedNavbar from "../components/UnloggedNavbar";
import Login from "../components/Login";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function LoginScreen() {
    
  return (
      <div className="container">
        <UnloggedNavbar />
        <br/>
        <ToastContainer/>
        <Login />
      </div>
  );
}

export default LoginScreen;
