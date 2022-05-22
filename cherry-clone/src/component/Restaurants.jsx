import React from "react";
import Restaurant from "./Restaurant";
// import restaurant1 from "../assets/restaurant1.jpeg"
// import restaurant2 from "../assets/restaurant2.jpeg"
// import restaurant3 from "../assets/restaurant3.jpeg"

const Restaurants = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
          {props.restaurants.map((restaurant) => (
              <Restaurant key={restaurant.id} restaurant={restaurant}/>
          ))}           
      </div>
    </div>
  );
};

export default Restaurants;
