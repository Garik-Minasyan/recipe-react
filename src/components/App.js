import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";
import Header from "./Header";
import "./../css/app.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "fa72c720";

  const APP_KEY = "22b924308c94814e1ebd24de2e47d3e5";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const rezult = await Axios.get(url);
      if (!rezult.data.more) {
        return setAlert("No food with such name");
      }
      console.log(rezult);
      setRecipes(rezult.data.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="app">
      <Header />
      <div className="form">
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input
            className="form-input"
            type="text"
            placeholder="Search Food"
            autoComplete="off"
            onChange={onChange}
            value={query}
          />
          <input className="input-submit" type="submit" value="search" />
        </form>
      </div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Recipe key={recipe.recipe.url} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default App;
