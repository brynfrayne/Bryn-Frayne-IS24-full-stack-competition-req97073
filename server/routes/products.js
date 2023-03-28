const express = require('express');
const router = express.Router();
const fs = require('fs');
const { validateProductFields, updateProductIfMatch, generateNewProductId } = require('../utils/validationUtils');
const productsFilePath = '/Users/brynfrayne/Documents/Web-Development/Bryn-Frayne-IS24-full-stack-competition-req97073/server/data/mergedData.json';
const productsFile = fs.readFileSync(productsFilePath, 'utf8');


// GET all products
router.get('/', (req, res) => {

    // Retrieve all products from the database
    const products = JSON.parse(productsFile);

    // Return the list of products as a JSON response
    res.json(products);
  });

// GET a single product by ID
router.get('/:id', (req, res) => {

    const products = JSON.parse(productsFile);
    const productId = parseInt(req.params.id);

    // Retrieve the product from the database using the product ID
    const product = products.find((product) => {
        if (product.productId === productId) return product;
    });

    // Return the product as a JSON response
    res.json(product);
});

// GET a list of products by scrum master name or developer name
router.get('/search', (req, res) => {
    console.log('searching');
    console.log(req.query);
    const products = JSON.parse(productsFile);
    const { name, role } = req.query;

    // Check if role is specified and filter products based on the role
    const filteredProducts = products.filter((product) => {
      if (role === 'scrum master') {
        return product.scrumMasterName === name;
      } else if (role === 'developer') {
        return product.Developers.includes(name);
      } else {
        // If role is not specified, filter based on both scrum master and developer
        return product.scrumMasterName === name || product.Developers.includes(name);
      }
    });

    // Return the filtered products as a JSON response
    res.json(filteredProducts);
  });

// POST a new product
router.post('/', (req, res) => {

    // Check that the request body contains all the required fields
    const validationResult = validateProductFields(req.body);

    // If the validation failed, return an error message as a JSON response
    if (!validationResult.success) {
        return res.status(400).json({ message: validationResult.message });
    }

    // Create a productId which does not collide with any existing product IDs
    const products = JSON.parse(productsFile);
    const newProductId = generateNewProductId(products);

    // Create a new product object
    const newProduct = {
        productId: newProductId,
        productName,
        productOwnerName,
        Developers,
        scrumMasterName,
        startDate,
        methodology
    };

    // Add the new product to the database
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));

    // Return a success message as a JSON response
    res.json({ message: 'Product created successfully', product: newProduct });
});

// PUT (update) an existing product by ID
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const validationResult = validateProductFields(req.body);

    // If the validation failed, return an error message as a JSON response
    if (!validationResult.success) {
        return res.status(400).json({ message: validationResult.message });
    }

    // Update the product in the database using the data in updatedProduct and the product ID
    const products = JSON.parse(productsFile);
    const updatedProduct = products.map((product) => updateProductIfMatch(product, parseInt(productId), req.body));
    fs.writeFileSync(productsFilePath, JSON.stringify(updatedProduct));

    // Return the updated product as a JSON response
    res.json({ message: 'Product updated successfully', product: updatedProduct });

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
