import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ProductAddStock from "../components/stock/ProductAddStock";
import LoggedStockNavbar from "../components/LoggedStockNavbar";


function StockListToAddScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <ProductAddStock/>
      </div>
  );
}

export default StockListToAddScreen;