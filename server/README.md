# Server-side Code

This server-side code uses Node.js and Express to provide a RESTful API for a product list application. The API enables clients to perform CRUD operations on the list of products, and includes support for searching by developer name or scrum master name. The server uses a JSON file as the database to store the list of products.

## Getting Started

To run the server:

1. Install Node.js and NPM
2. Clone the repository and navigate to the server directory
```
cd YOUR-REPOSITORY/Bryn-Frayne-IS24-full-stack-competition-req97073/server
```
3. Run `npm install` to install dependencies
```
npm install
```
4. Run `node index.js` or `nodemon index.js` to start the server
```
node index.js
```
```
nodemon index.js
```
5. The server will be available at http://localhost:3000/api

## API Documentation

This server-side code includes Swagger documentation to help developers interact with the API. To access the Swagger documentation, navigate to http://localhost:3000/api/api-docs in your browser.

## Endpoints

The server provides the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a single product by ID
- `GET /api/products/search?name=:name&role=:role`: Search for products by developer name or scrum master name
- `POST /api/products`: Add a new product
- `PUT /api/products/:id`: Update an existing product by ID

## File Structure

- `index.js`: Main file that sets up the Express app and defines the routes
- `routes/products.js`: File that defines the route handlers for the `/api/products` endpoints
- `utils/validationUtils.js`: File that contains utility functions for validating product fields and generating new product IDs
- `data/mergedData.json`: File that stores the list of products as a JSON array
- `swagger/swagger.js`: File that sets up Swagger documentation for the API
- `swagger/swagger_products.js`: File that defines the Swagger documentation for the `/api/products` endpoints
