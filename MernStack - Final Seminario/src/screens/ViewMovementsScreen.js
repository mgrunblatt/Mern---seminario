import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ProductStockMovementList from "../components/stock/ProductStockMovementList";
import LoggedStockNavbar from "../components/LoggedStockNavbar";

function ViewMovementsScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <ProductStockMovementList />
      </div>
  );
}

export default ViewMovementsScreen;
