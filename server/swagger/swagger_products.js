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
*
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: An internal server error occurred.
 */
router.get('/', (req, res) => {
  // ...
});

/**
 * @swagger
 * /products/search:
 *   get:
 *     summary: Retrieve a list of products based on the search criteria
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         description: The name of the scrum master or a developer
 *         schema:
 *           type: string
 *       - in: query
 *         name: role
 *         required: false
 *         description: The role of the person specified in the name parameter
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: No products found for the specified search criteria.
 */
router.get('/search', (req, res) => {
  // ...
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The product object matching the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The specified product ID does not exist.
 */
router.get('/:id', (req, res) => {
  // ...
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       description: The product to create.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The newly created product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: The request body is invalid or missing required fields.
 */
router.post('/', (req, res) => {
  // ...
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product by ID
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: The updated product object
 *       required:


*/

module.exports = {
    Product: {
      type: 'object',
      properties: {
        productId: {
          type: 'integer',
          description: 'Unique identifier for the product',
          example: 1
        },
        productName: {
          type: 'string',
          description: 'Name of the product',
          example: 'nam tristique tortor eu pede'
        },
        productOwnerName: {
          type: 'string',
          description: 'Name of the product owner',
          example: 'Irina Goodenough'
        },
        Developers: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'List of developers working on the product',
          example: ["Espinoza Owens", "Curry Bauer", "Louise Sosa", "Delgado Kelley", "Adrienne Nunez"]
        },
        scrumMasterName: {
          type: 'string',
          description: 'Name of the scrum master for the product',
          example: 'Gibb Founds'
        },
        startDate: {
          type: 'string',
          description: 'Start date of the product',
          example: '2022/07/16'
        },
        methodology: {
          type: 'string',
          description: 'Development methodology used for the product',
          example: 'Waterfall'
        }
      }
    }
  }
