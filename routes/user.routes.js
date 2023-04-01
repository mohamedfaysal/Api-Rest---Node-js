const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

/**
 * @swagger
 * /api/users/create:
    post:
      summary: Create a new user
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        200:
          description: Success
          content: 
            application/json:
              schema:
                $ref: '#/components/schemas/User'
 */
router.post('/users/create', userController.createUser);


/**
 * @swagger
 * /api/users:
    get:
      summary: Get all users.
      description: allows to retrieve all users registered in the database.
      responses:
        200:
          description: Success
          content: 
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'

 */
router.get('/users', userController.getUsers);


/**
 * @swagger
 * /api/users/{id}:
    get:
      summary: Get a user.
      description: Retrieves a user by his ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        200:
          description: Success
          content: 
            application/json:
              schema:
                $ref: '#/components/schemas/User'
 */
router.get('/users/:id', userController.getUser);


/**
 * @swagger
 * /api/users/update/{id}:
    put:
      summary: Modify a user.
      description: Retrieves a user by his ID and modifies him
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        200:
          description: Success
          content: 
            application/json:
              schema:
                $ref: '#/components/schemas/User'
 */
router.put('/users/update/:id', userController.updateUser);


/**
 * @swagger
 * /api/users/delete/{id}:
    delete:
      summary: Delete a user.
      description: Retrieves a user by his ID and deletes him
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        200:
          description: Success
          content: 
            text/plain:
              schema:
                type: string
                example: Deletion successfully completed
 */
router.delete('/users/delete/:id', userController.deleteUser);


module.exports = router;