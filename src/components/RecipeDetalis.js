import React from "react";
import "./../css/recipeDetalis.css";

const RecipeDetalis = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <div className="ingredient" key={ingredient.weight}>
        <div className="ingredient-text">{ingredient.text}</div>
        <div className="ingredient-weight">{ingredient.weight} - Weight</div>
      </div>
    );
  });
};

export default RecipeDetalis;
