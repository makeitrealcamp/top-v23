const { Router } = require('express');

const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller')

const router = Router();

/**
 * @openapi
 * /api/users:
 *  get:
 *   tags:
 *   - Users
 *   description: Get all users
 *   responses:
 *     200:
 *      description: An array of users
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/components/schemas/userResponse'
 */
router.get('/', getAllUsers);

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *    tags:
 *    - Users
 *    description: Get a single user
 *    summary: Get a single user Summary
 *    parameters:
 *    - in: path
 *      name: id
 *      description: The id of the user to get
 *      required: true
 *    responses:
 *     200:
 *      description: A single user
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userResponse'
 *     404:
 *      description: User not found
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userNotFound'
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */
router.get('/:id', getSingleUser);

/**
 * @openapi
 * /api/users:
 *  post:
 *   tags:
 *   - Users
 *   description: Create a new user an return the user
 *   summary: Create a new user Summary
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         example: John Doe
 *         description: The name of the user
 *         default: John Doe
 *        email:
 *         type: string
 *         example: jd@exmaple.com
 *       required:
 *       - name
 *       - email
 *   responses:
 *     201:
 *      description: A single user
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userResponse'
 *     400:
 *      description: Bad request
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/badRequest'
 *     409:
 *      description: User already exists
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
