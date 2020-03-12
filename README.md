
# GOOGLE BOOK SEARCH(MERN APPLICATION)

## About: ##

* This is a React-based application that displays books based on user searches. In this two-page application, user can search for books by using Google Books API. User has the option to "View" a book , bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database. On the saved books page, all the books saved to the Mongo database are rendered. User has an option to "View" the book or "Delete" a book, removing it from the Mongo database. This application requires to create React components, work with helper/util functions, and utilize React hooks to query and display books based on user searches. Node, Express and MongoDB is used so that user can save books to review or remove from the list. 

## Installation: ##

  * The application is deployed using Heroku: 

  * Running aplication can be reached at  https://protected-journey-69487.herokuapp.com

  # Setup for Local Machine

1. Run application using npm start
   

## Usage: ##

  ![Book Search](client/public/BookSearch.gif)
    
## How: ##
### Client Side: ###

 - index.js: `ReactDOM.render` function takes two arguments: HTML code (our App Component) and HTML element with id of  `root` and displays our App component inside the HTML element.

 - App: Encapsulates `Search`, `Saved` and `NoMatch` components. It uses `react-router-dom` to navigate, hide and show our react components mentioned previously without changing the route within express.

 - utils/API.js: Exports 4 functions: `getBook` which makes a get request call to the Google Books API with the keyword passed as props from `Search` component. `getBooks`,`deleteBook`, `saveBook` functions make get, delete and post requests respectively to the server to get the list of the books from the database, delete a book  by a id and save a book to the database. 

 - pages/Search: Encapsulates `Container`, `Row`, `Jumbotron`, `Col` components for display purposes which are imported from `Grid`, `Input` and `FormBtn` components for querying books to which proper states and functions are passed as props. Also encapsulates `List`, `ListItem`, `Book`,`SaveBtn` and `ViewButton` components to display the search results by passing props. This functional component keeps track of states such as `search` and `books` by using hooks and defines following functions: `handleInputChange` function that's passed to the `Input` component that sets the search state with user input, `handleFormSubmit` function which is passed to the `FormBtn` component that makes an api call and sets the `books` state, `saveBook` function which is passed to the `SaveBtn` component so title, authors, description, image, link fields can be parsed from the data about specified book and passed with the proper API call to the server, `viewBook` function that's passed to the `viewBtn` component so a new tab will open which brings the user to the google book page.

 - pages/Saved: Encapsulates `Container`, `Row`, `Jumbotron`, `Col` components for display purposes which are imported from `Grid`, `List`, `ListItem`, `Book`,`DeleteBtn` and `ViewButton` components to display the saved books or delete them by passing props to the lower order components. It keeps track of the "books" state which holds the saved books that's returned from the server. When the page mounts, uses hooks to make the API calls to the server to get the saved books from the database and set the `books` state. It also includes `deleteBook` function which it passes to the "DeleteBtn" component with the id of the specified book; and `viewBook` function which it passes to `ViewBtn` component with the specified book's link.

 - pages/NoMatch: Encapsulates `Container`, `Row`, `Jumbotron`, `Col` components for display purposes which are imported from `Grid`. Displays `404 Not Found` message when the user tries to navigate to paths other than `/`,`/search` and `/saved`.

 - The function of ViewBtn, SaveBtn, DeleteBtn; Input components, FormBtn component under Form; List, ListItem components under List, components for display purposes under Grid are mentioned above.

 - components/Nav: This Functional component displays the navigation bar where there are tabs for saved and search pages and the name of the application

 - components/Book: this functional component displays title, author(s), image and description of a book. 

 ### Server Side: ###

 - server.js: This is the code that starts the server listening on a PORT. PORT number is 3001 for local development. Other than all the necessary set ups, connection to the MongoDB database called googlebooks is established.

 - routes:  Following Express routes are added to the application:

      - /api/books (get) : returns all saved books as JSON.
      - /api/books (post): used to save a new book to the database.
      - /api/books/:id (delete): used to delete a book from the database by Mongo _id.
      - * (get) - Load single HTML page in client/build/index.html. It is defined after all other routes are defined.

 - controllers: Using the model defined by the mangoose schema, provides functions that executes database queries to find all the books in the database, save a book to the database and delete a book from the database.

 - models: `Book` model is defined with the following fields:

        1. title: Title of the book from the Google Books API
        2. authors: The books's author(s) as returned from the Google Books API
        3. description: The book's description as returned from the Google Books API
        4. image: The Book's thumbnail image as returned from the Google Books API
        5. link: The Book's information link as returned from the Google Books API

 - Creating documents in books collection is similar to the following: 

      {
        authors: ["Suzanne Collins"]
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
        title: "The Hunger Games"
      }`

## Credits: ## 

I'm greatful for our instructor Omar Patel and TA's Tyler Bray, Matthew Calimbas for their help on the issues encountered in the process of developing this application.

The web sites that I found useful while implementing the application are listed below:

  * Screencastify- Screen video recorder
  * https://getbootstrap.com/docs/4.0/components/navs/
  * https://mongoosejs.com/docs/schematypes.html
  * https://reactjs.org/docs/
   
## Licence: ##

Anybody is welcomed to copy code snippets and test it out.
