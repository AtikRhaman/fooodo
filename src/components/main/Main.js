import React from "react";
import FoodCart from "./FoodCart";
import FoodPopular from './FoodPopular'
import './main.css'
const Main = () =>(
  <div className = 'main-wrapper'>
    <FoodCart/>
    <FoodPopular/>
  </div>);
export default Main;
