import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItemCard from "../components/FoodItemCard";

const Restaurant = () => {
  const { restId } = useParams();
  const baseURL = "http://localhost:3000";
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState(null);
  const restUrl = `${baseURL}/restaurantData/${restId}`;
  const menuUrl = `${baseURL}/menuData`;

  useEffect(() => {
    axios.get(restUrl).then((response) => {
      setRestaurant(response.data);
    });
    axios.get(menuUrl).then((response) => {
      setMenu(response.data);
    });
  }, []);

  if (!restaurant) return null;
  if (!menu) return null;
  return (
    <div className="rest-page">
      <div className="restaurant">
        <img src={restaurant.image} className="restaurant-img" />
        <div className="restaurant-content">
          <div className="restaurant-tags">
            <span
              className={`tag ${
                restaurant.isSpecial ? "special" : "non-special"
              }`}
            >
              {restaurant.category}
            </span>
          </div>
          <p className="restaurant-title">{restaurant.title}</p>
          <ul className="restaurant-attributes">
            <li className="restaurant-attribute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
              </svg>
              <span>{restaurant.tmeToReach}</span>
            </li>
            <li className="restaurant-attribute">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
              <span>{restaurant.address}</span>
            </li>
            <li className="restaurant-attribute">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
              </svg>
              <span>
                <strong>{restaurant.rating}</strong> rating
              </span>
            </li>
            <li className="tags">
              {restaurant.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="rlist">
        {menu.map((meal, index) => (
          <FoodItemCard meal={meal} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
