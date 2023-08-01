# Country Finder App

This is a simple web application that allows users to search for countries and retrieve information about them. It is built using Next.js and Tailwind CSS for the frontend and Node.js and Express for the backend. It also uses Yarn Workspaces to manage the frontend and backend codebases in a single repository.

## Prerequisites

- Node.js (v16 or higher)
- Yarn (v1.22 or higher)

## How to Use

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Install the project dependencies using the following command:

```bash
yarn install
```

4. Start **both** the frontend and backend servers using the following command:

```bash
yarn dev
```

5. Open your web browser and navigate to `http://localhost:3000` to access the app.

## Backend Endpoint

The frontend app interacts with [Rest Countries API](https://restcountries.com/) using an "API-Key" for authorization and authentication. Make sure to provide this API KEY for successful communication with the API: `9d92e1f33794fb3e038f647010363b9a`.

Feel free to explore the code and customize the app as per your requirements! Happy coding! 🚀
