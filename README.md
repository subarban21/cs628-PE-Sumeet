# Recipe Finder App

**Input**

The Recipe Finder app lets the user view recipes and also allows for adding new recipes which includes recipe name, ingredients, preparation time, cooking time, description, and an external URL. Once the user submits with the necessarry changes, it will be sent to the backend via a HTTP POST request. The Recipe list also allows for editing recipes that are already in the list and also the ability to delete a recipe with a click of a button. 

**Process**

The Recipe Finder app uses a stack approach which involves a backend and frontend. The frontend is built with React which uses a React Router for navigating. The backend uses Node.js and Expres which handles all the API requests. The data is stored in MongoDB Atlas and when the user submits any request, it is handled through the backend which will proccess and handle the interaction with MongoDB database (Create, Retrieve, Update or Delete) and the connection is done through a MongoClient driver.
The recipe data that exists within the database was all preloaded through a downloaded JSON file that was made avaialble on a github repository. 

**Output**

The Recipe Finder connects to the datbase and displays to the user a list of recipes dynamically. When the user clicks the "Add Recipe" button it will then appear in the list, and when the user clicks on the recipe name the user will be taken to the recipe details page. If the user clicks on the edit button or delete button the changes will be seen immediately on the recipe list page. 
