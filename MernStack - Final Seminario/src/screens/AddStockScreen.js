import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import AddStock from "../components/stock/AddStock";
import LoggedStockNavbar from "../components/LoggedStockNavbar";


function AddStockScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <AddStock/>
      </div>
  );
}

export default AddStockScreen;