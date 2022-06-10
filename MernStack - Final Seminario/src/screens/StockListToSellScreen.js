import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ProductSellStock from "../components/stock/ProductSellStock";
import LoggedStockNavbar from "../components/LoggedStockNavbar";


function StockListToSellScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <ProductSellStock/>
      </div>
  );
}

export default StockListToSellScreen;