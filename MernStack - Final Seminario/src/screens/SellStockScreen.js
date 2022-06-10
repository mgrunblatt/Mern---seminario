import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ProductSellStock from "../components/stock/SellStock";
import LoggedStockNavbar from "../components/LoggedStockNavbar";


function SellStockScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <ProductSellStock/>
      </div>
  );
}

export default SellStockScreen;
