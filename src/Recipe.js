import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient, index) => 
          <li key={index}>{ingredient.text}</li>
        )}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
