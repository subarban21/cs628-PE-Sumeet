# Movie List App

## Input
This application expects a predefined list of movies, each with a title, genre, and release year. The user provides input by clicking on the dropdown menu to select a genre, and that determines the movies that will be displayed. The input includes clicking on a movie that would then show an alert of the title of the movie.

## Process
This app, on selection, will filter the movie list according to genre; for example, "All Genres" would show all movies on the list. It just does this filtering and updating of state using a simple conditional check through `useState` with React and handles the click using event handlers that pop an alert showing the title of the movie.

## Output
This filtered list of movies includes the movie title in bold, followed by the genre on the next line, and then the release year. Clicking a movie shows an alert of the title of the selected movie.
