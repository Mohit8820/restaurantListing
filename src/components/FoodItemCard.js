import React from "react";

const FoodItemCard = ({ meal }) => {
  return (
    <div className="meal">
      <img src={meal.image} className="meal-img" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className={`tag ${meal.isVeg ? "veg" : "non-veg"}`}>
            {meal.category}
          </span>
        </div>
        <p className="meal-title">{meal.title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span>{meal.description}</span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon md hydrated"
              name="restaurant-outline"
              role="img"
              aria-label="restaurant outline"
            ></ion-icon>
            <span>{meal.quantity}</span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon md hydrated"
              name="star-outline"
              role="img"
              aria-label="star outline"
            ></ion-icon>
            <span>{meal.discount} off</span>
          </li>
          <li className="meal-attribute">
            <ion-icon
              className="meal-icon md hydrated"
              name="star-outline"
              role="img"
              aria-label="star outline"
            ></ion-icon>
            <span>{meal.amount} </span>
          </li>
          <li className="meal-attribute">
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
              <strong>{meal.rating}</strong> rating
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FoodItemCard;
