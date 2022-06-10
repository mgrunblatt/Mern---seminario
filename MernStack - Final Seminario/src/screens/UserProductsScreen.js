import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ProductList from '../components/stock/ProductList';
import LoggedStockNavbar from "../components/LoggedStockNavbar";

function UserProductsScreen() {
    
  return (
      <div className="container">
        <LoggedStockNavbar />
        <br/>
        <ProductList />
      </div>
  );
}

export default UserProductsScreen;
