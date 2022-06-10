import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from "./screens/SignUpScreen";
import UserProductsScreen from "./screens/UserProductsScreen";
import ViewMovementsScreen from "./screens/ViewMovementsScreen";
import SellStockScreen from "./screens/SellStockScreen"
import AddStockScreen from "./screens/AddStockScreen"
import StockListToAddScreen from "./screens/StockListToAddScreen"
import StockListToSellScreen from "./screens/StockListToSellScreen"
import CreateProductScreen from "./screens/CreateProductScreen"
import HomeScreen from "./screens/HomeScreen"
import DatePickerScreen from "./screens/DatePickerScreen"
import PetsScreen from "./screens/PetsScreen";
import CreatePetScreen from "./screens/CreatePetScreen";
import SelectTimesScreen from "./screens/SelectTimesScreen";
import CreateBookingScreen from "./screens/CreateBookingScreen";
import BookingsScreen from "./screens/BookingsScreen";

function App() {
  return (
    <Router>
      <Route path="/" exact component={() => <LoginScreen />} />
      <Route path="/productsList" component={() => <UserProductsScreen />} />
      <Route path="/datePicker" component={() => <DatePickerScreen />} />
      <Route path="/home" component={() => <HomeScreen />} />
      <Route path="/pets" component={() => <PetsScreen />} />
      <Route path="/createPet" component={() => <CreatePetScreen />} />
      <Route path="/selectTimes" component={() => <SelectTimesScreen />} />
      <Route path="/stockmovements" component={() => <ViewMovementsScreen />} />
      <Route path="/create" component={() => <SignUpScreen />} />
      <Route path="/createProduct" component={() => <CreateProductScreen />} />
      <Route path="/sellStock" component={SellStockScreen} />
      <Route path="/addStock" component={AddStockScreen} />
      <Route path="/createBooking" component={CreateBookingScreen} />
      <Route path="/bookings" component={() => <BookingsScreen/>} />
      <Route path="/stockListToAdd" component={StockListToAddScreen} />
      <Route path="/stockListToSell" component={StockListToSellScreen} />
    </Router>
  );
}

export default App;
