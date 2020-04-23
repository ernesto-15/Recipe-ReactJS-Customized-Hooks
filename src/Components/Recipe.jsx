import React from 'react';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h1>{recipe.label}</h1>
      <ol>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {recipe.calories} cals</p>
      <img src={recipe.image} alt="" />
    </div>
  );
};

export default Recipe;
