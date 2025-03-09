import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./recipeFinder.css" // CSS file for styling
 
export default function Edit() { // The edit component
 const [form, setForm] = useState({  //state is setup to store the form imput
  name: "",
  ingredients: "",
  url: "",
  cookTime: "",
  recipeYield: "",
  datePublished: "", 
  prepTime: "",
  description: "",
   recipes: [],
 });
 const params = useParams(); // gets the url details
 const navigate = useNavigate(); // the hook for navigating between pages
 
 useEffect(() => {  // gets the data when the component is mounted. 
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const recipe = await response.json();
     if (!recipe) {
       window.alert(`recipe with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(recipe); //It will update the state with the fetched data
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // function will update the form state
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {  //handles the form submission
   e.preventDefault();
   const editedRecipe = {  //gets the data and copies form data to a new object
     name: form.name,
     ingredients: form.ingredients,
     url: form.url,
     cookTime: form.cookTime,
     recipeYield: form.recipeYield,
     datePublished: form.datePublished,
     prepTime: form.prepTime,
     description: form.description,

   };
 
   // PATCH request which will update the recipe
   await fetch(`https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedRecipe),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/"); // Navigates back to the home page
 }
 
 // This following section will display the form that takes 
 //input from the user to update the data.
 return (
   <div className="edit-container">
     <h3>Update Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients: </label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="url">URL: </label>
         <input
           type="text"
           className="form-control"
           id="url"
           value={form.url}
           onChange={(e) => updateForm({ url: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cookTime">Cook Time: </label>
         <input
           type="text"
           className="form-control"
           id="cookTime"
           value={form.cookTime}
           onChange={(e) => updateForm({ cookTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="recipeYield">Recipe Yield: </label>
         <input
           type="text"
           className="form-control"
           id="recipeYield"
           value={form.recipeYield}
           onChange={(e) => updateForm({ recipeYield: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="datePublished">Date Published: </label>
         <input
           type="text"
           className="form-control"
           id="datePublished"
           value={form.datePublished}
           onChange={(e) => updateForm({ datePublished: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prepTime">Prep Time: </label>
         <input
           type="text"
           className="form-control"
           id="prepTime"
           value={form.prepTime}
           onChange={(e) => updateForm({ prepTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description: </label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}