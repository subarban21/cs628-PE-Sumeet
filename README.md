# Cities List App

## Input
When the user logs on to the Cities Application, it allows the user to add a city through a form which asks for City Name, Country and Population. Once the add city buttone is clicked it will trigger
a function that stores the city details into a cities state which use the useState hook. 

## Process
Each new city added will have a unique identifier associated to it which is determined by the current array list, it looks for the value that is the highest and then assigns a value based on the
highest id + 1 to the new city being added. The new city will then be added once all input fields have data within it (required option added so no blank data is sent) it will be added to the cities array
using the setCities. The router will the navigate the user back to the city list with the newly added city. The city list will list all cities in the array that are links and once a city is clicked the CityDetails will be retrieved using the useParams() which will grab the unique id that is associated with the city. 

## Output
The city array is displayed on the Cities List page and each city is clickable (Link tag) which will allow the user to view the details of that city. The cities detail page will dispaly the
cities name, Country and Population. The application also uses custom css for a better visual display for the user which is all stored in the Cities.css file. 
