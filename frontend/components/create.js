
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./recipeFinder.css" // CSS file for styling


export default function Create() {  // The create component
 const [form, setForm] = useState({ // state is setup and inputs from form are stored
   name: "",
   ingredients: "",
   url: "",
   cookTime: "",
   recipeYield: "",
   datePublished: "", 
   prepTime: "",
   description: "",
 });
 const navigate = useNavigate();  // Hook for navigating bwteeen the pages
 
 // function to update the state
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 

   // the form data is copied to a new object
   const newRecipe = { ...form };


	// POST request is sent to save the new recipe
   await fetch("https://verbose-spoon-wg4gj9q5pqrcwr6-5050.app.github.dev/recipe", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecipe),
   })
   .catch(error => {
     window.alert(error); // If an error occurs it is is displayed.
     return;
   });
 
   setForm({ name: "", ingredients: "", url: "", cookTime: "", recipeYield: "", datePublished: "", prepTime: "", description: "", });
   navigate("/"); // takes you back to the home page
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="ingredients">Ingredients</label>
         <input
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="url">URL</label>
         <input
           type="text"
           className="form-control"
           id="url"
           value={form.url}
           onChange={(e) => updateForm({ url: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="cookTime">Cook Time</label>
         <input
           type="text"
           className="form-control"
           id="cookTime"
           value={form.cookTime}
           onChange={(e) => updateForm({ cookTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="recipeYield">Recipe Yield</label>
         <input
           type="text"
           className="form-control"
           id="recipeYield"
           value={form.recipeYield}
           onChange={(e) => updateForm({ recipeYield: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="datePublished">Date Published</label>
         <input
           type="text"
           className="form-control"
           id="datePublished"
           value={form.datePublished}
           onChange={(e) => updateForm({ datePublished: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="prepTime">Prep Time</label>
         <input
           type="text"
           className="form-control"
           id="prepTime"
           value={form.prepTime}
           onChange={(e) => updateForm({ prepTime: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Create recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}