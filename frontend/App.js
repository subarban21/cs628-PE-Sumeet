import React from "react";
// CSS file used for styling
import "./components/recipeFinder.css";
import { Route, Routes } from "react-router-dom";

// Importing components
import Edit from "./components/edit";
import Create from "./components/create";
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/recipeDetails";

const App = () => {
  return (
    <div className="app-container">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<RecipeList />} /> {/* The home route */}
          <Route path="/edit/:id" element={<Edit />} /> {/* route for editing recipes */}
          <Route path="/create" element={<Create />} /> {/* route for creating recipes */}
          <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* route for viewing recipe details */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
