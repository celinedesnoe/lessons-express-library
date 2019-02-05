# Express Library

README files are usually written in the MARKDOWN format (.md is short for markdown)

## File Structure

- bin/ = files you run directly in the terminal
  - www - file we need to run to start our app
- models/ - Mongoose model files
- public/ - Static files (just like before)
  - images/ - image files
  - javacripts/ - is for FRONT END js
  - stylesheets/ is for CSS
    - style.scss - ONLY EDIT THIS FILE (it's a SASS file)
- routes/ - where all the routes will be defined in multiple router files
  - index.js = contains home page route and all the information routes that are "static"
- views/ - HBS files (just like before)
  - index.hbs - home page
  - layout.hbs - layout file
  - not-found.hbs - 404 page
  - error.hbs - generic error page (not 404 errors)
- .env - file for ENVRIONNMENT VARIABLES (more on this later)
  - PORT - change the server's port number here
- .gitignore - list of files/folers to NOT push to GitHub
- app.js = connecting all the pieces of the app together
- package-lock.json - specific versions of all our npm packages (so everyone has the same version)
- package.json - list of all our npm packages AND our scripts
  - use "npm run-script dev" to run the app
- README.md - documentation of this project
