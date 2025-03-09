import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recipeFinder.css"  // CSS file for styling

 
const Recipe = (props) => ( // The recipe component which displays a single recipe row
  <tr>
    <td>
	{/* Links to the recipe details page */}
      <Link to={`/recipes/${props.recipe._id}`}>{props.recipe.name}</Link> 
    </td>
    <td>{props.recipe.description}</td>
    <td>{props.recipe.url}</td>
    <td className="action-buttons">
	{/* Links to the edit page */}
    <Link className="btn edit-btn" to={`/edit/${props.recipe._id}`}>Edit</Link>
    <button className="btn delete-btn"
	{/* Delete button that can be used to delete a recipe */}
      onClick={() => props.deleteRecipe(props.recipe._id)}
    >
      Delete
  </button>
</td>
  </tr>
);
 
export default function RecordList() { // main component to list all recipes
 const [recipe, setRecipe] = useState([]); 
 
 // Grabs the recipes from the database
 useEffect(() => {
   async function getRecipe() {
     const response = await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipe = await response.json();
     setRecipe(recipe); // updates the states with the fetched data
   }
 
   getRecipe();
 
   return;
 }, [recipe.length]);
 
 // This method will delete a recipe from the database
 async function deleteRecipe(id) {
   await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe/${id}`, {
     method: "DELETE"
   });
 
   const newRecipe = recipe.filter((el) => el._id !== id);
   setRecipe(newRecipe);
 }
 
 // This will map out the records on the table
 function recipeList() {
   return recipe.map((recipe) => {
     return (
       <Recipe
         recipe={recipe}
         deleteRecipe={() => deleteRecipe(recipe._id)}
         key={recipe._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <div className="page-container">
    <h3 className="recipe-title">Sumeet's Recipe Finder</h3>
    {/* Adds the Recipe Button */}
    <div className="add-recipe-container">
      <Link to="/create" className="add-recipe-btn">Add Recipe</Link>
    </div>

    {/* This table displays the list of recipes to the user */}
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{recipeList()}</tbody>
      </table>
    </div>
  </div>
);
}