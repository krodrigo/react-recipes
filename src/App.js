import React, { useEffect, useState} from "react";
import "./App.css";

const App = () => {
  const APP_ID = "65f387ae";
  const APP_KEY = "359a21e78e13caf4f0dc327ed134942d";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="button">
          Pesquisar
        </button>
      </form>
    </div>
  );
};

export default App;
