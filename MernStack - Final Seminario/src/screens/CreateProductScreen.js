import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import CreateProduct from "../components/stock/CreateProduct";
import LoggedStockNavbar from "../components/LoggedStockNavbar";


function CreateProductScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <CreateProduct/>
      </div>
  );
}

export default CreateProductScreen;