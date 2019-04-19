import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h3>Ingredientes</h3>
      <ul>
        {ingredients.map((ingredient, index) => 
          <li key={index}>{ingredient.text}</li>
        )}
      </ul>
      <p>Calorias: {calories.toFixed(2)}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
