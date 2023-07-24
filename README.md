# Country Finder App

This is a simple web application built using React that allows users to find and retrieve information about countries based on their names.

## How to Use

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install the project dependencies using the following command:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your web browser and navigate to `http://localhost:3000` to access the app.

## Backend Endpoint

The frontend app interacts with a backend endpoint to retrieve country information. The endpoint is located at `/api/countries/:name` and accepts GET requests. It communicates with [Rest Countries API](https://restcountries.com/) using an "API-Key" for authorization. Make sure to provide a valid API key for successful communication with the external API.

## Functionality

The app provides a user interface with a search input field and a "Search" button. Users can enter the name of a country they wish to find and click the "Search" button to retrieve information about that country.

When a user submits the search form, the app makes a request to the backend server, passing the entered country name as a parameter. The server communicates with the "restcountries.com" API to retrieve relevant information about the country and returns it in JSON format.

If the country is found, the app displays the retrieved information on the page, including the country's flag, name, capital(s), continent(s), population, and languages spoken.

## Note

- Ensure that you have the correct API key ("9d92e1f33794fb3e038f647010363b9a") for successful communication with the "restcountries.com" API.

Feel free to explore the code and customize the app as per your requirements! Happy coding! 🚀
