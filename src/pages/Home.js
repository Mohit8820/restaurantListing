import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import axios from "axios";

const Home = () => {
  const baseURL = "http://localhost:3000/restaurantData";
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRestaurants(response.data);
    });
  }, []);

  if (!restaurants) return null;

  return (
    <div className="home">
      <h1>Restaurants List</h1>
      <div className="rlist">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
