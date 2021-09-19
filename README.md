## How to install
1.1 Clone the repo

1.2 Create `.env` file in root folder of project

1.2.1 Generate API Key (v3 auth) at https://www.themoviedb.org/settings/api

1.2.2 Insert key at `.env` file. Example of file you could check at `.sample.env` file

1.3 run `npm i`

1.4 run `npm run android`

## Video presentatio of the app


https://user-images.githubusercontent.com/17801144/133925337-19cce9a2-ba0b-4270-a86d-efc321135e73.mp4

## Task description
Exercise brief
Design an app for Android devices which will enable the user to search for movies/shows using IMDB, OMDB or a similar API, pick their favorites and hide those they do not wish to see or have already seen.

Tasks

- All of the information should be retrieved from the external APIs (you are free to choose which API you would like to use)
- By default the main screen should show movies and shows the user has added to their favorites list (title, movie poster, description and rating)
- Implement an option to search for a specific movie/show
- Once a user clicks on a movie/show a screen containing title, description, rating, movie/show poster should be shown
- Implement an option to add the movie/show to favorites list (this should persist on app restart)
- Implement an option to hide movie/show form future search results (this should persist on app restart)
- User should be informed if the internet connection is lost
- Take time to think about possible edge cases and access issues that should be solved

Evaluation criteria:

- Android best practices
- Edge cases covered
