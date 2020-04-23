import React, { useState } from 'react';
import Recipe from './Recipe';
import useHTTP from './Hooks/HTTP';
import './Menu.css';

const Menu = () => {
  const APP_ID = '4dcc17cf';
  const APP_KEY = '3588c4e00e03c289473113ddeb6e641b';

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const LINK = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const [recipes, isLoading] = useHTTP(LINK);

  const hanldeSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
    console.log(query);
  };

  const handleChage = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="menu">
      <form action="submit" className="search-form" onSubmit={hanldeSubmit}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleChage}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      <div className="menu-list">
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe.recipe} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
