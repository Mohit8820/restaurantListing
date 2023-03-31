import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/${restaurant.id}`}>
      <div>
        {/* <h3>{restaurant.title}</h3> */}
        {/* <img src={restaurant.image} /> */}
        {/* <p>{restaurant.rating}</p> */}
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
              </span>{" "}
            </div>
            <p className="restaurant-title">{restaurant.title}</p>
            {/* <ul className="restaurant-attributes">
            <li className="restaurant-attribute">
              <ion-icon
                className="restaurant-icon md hydrated"
                name="flame-outline"
                role="img"
                aria-label="flame outline"
              ></ion-icon>
              <span>
                <strong>650</strong> calories
              </span>
            </li>
            <li className="restaurant-attribute">
              <ion-icon
                className="restaurant-icon md hydrated"
                name="restaurant-outline"
                role="img"
                aria-label="restaurant outline"
              ></ion-icon>
              <span>
                NutriScore ® <strong>74</strong>
              </span>
            </li>
            <li className="restaurant-attribute">
              <ion-icon
                className="restaurant-icon md hydrated"
                name="star-outline"
                role="img"
                aria-label="star outline"
              ></ion-icon>
              <span>
                <strong>{restaurant.rating}</strong> rating
              </span>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
