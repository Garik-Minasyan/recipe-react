import React, { useState } from "react";
import RecipeDetalis from "./RecipeDetalis";
import "./../css/recipe.css";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h6>{label}</h6>
      <img alt={label} src={image} />
      <div className="url-button">
        <a
          className="url-recipe"
          href={url}
          target="_blank"
          rel="noopener noreferror"
        >
          URL
        </a>
        <button onClick={() => setShow(!show)}>ingredients</button>
        {show && <RecipeDetalis ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default Recipe;
