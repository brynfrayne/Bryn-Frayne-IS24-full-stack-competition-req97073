const express = require('express');
const router = express.Router();
// const db = require('../data/lowdb');
const fs = require('fs');
const productsFile = fs.readFileSync('/Users/brynfrayne/Documents/Web-Development/Bryn-Frayne-IS24-full-stack-competition-req97073/server/data/mergedData.json');
const products = JSON.parse(productsFile);

// GET all products
router.get('/', (req, res) => {
    // Retrieve all products from the database
    // Return the list of products as a JSON response
    res.json(products);
  });

  // GET a single product by ID
  router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(productId);
    // Retrieve the product from the database using the product ID
    // Return the product as a JSON response
    const product = products.find((product) => {
        if (product.productId === productId) return product;
    });
    res.json(product);
  });

  // POST a new product
  router.post('/', (req, res) => {
    const newProduct = req.body;
    // Create a new product in the database using the data in newProduct
    // Return the newly created product as a JSON response
    res.json(createdProduct);
  });

  // PUT (update) an existing product by ID
  router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    // Update the product in the database using the data in updatedProduct and the product ID
    // Return the updated product as a JSON response
    res.json(updatedProduct);
  });

  module.exports = router;


/**
   * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         productId:
 *           type: integer
 *           description: Unique identifier for the product
 *           example: 1
 *         productName:
 *           type: string
 *           description: Name of the product
 *           example: nam tristique tortor eu pede
 *         productOwnerName:
 *           type: string
 *           description: Name of the product owner
 *           example: Irina Goodenough
 *         Developers:
 *           type: array
 *           items:
 *             type: string
 *           description: List of developers working on the product
 *           example: ["Espinoza Owens", "Curry Bauer", "Louise Sosa", "Delgado Kelley", "Adrienne Nunez"]
 *         scrumMasterName:
 *           type: string
 *           description: Name of the scrum master for the product
 *           example: Gibb Founds
 *         startDate:
 *           type: string
 *           description: Start date of the product
 *           example: 2022/07/16
 *         methodology:
 *           type: string
 *           description: Development methodology used for the product
 *           example: Waterfall
 *
 *
 * @swagger
 * tags:
 *  name: Products
 *  description: The products managing API
 * /products:
 *  get:
 *      summary: Returns the list of all the products
 *      tags: [Products]
 *      responses:
 *          '200':
 *              description: The list of the products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 *          '500':
 *              description: Some server error
  */
