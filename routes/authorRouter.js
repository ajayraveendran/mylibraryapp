const express = require('express');
const authorController = require('../controllers/authorController.js');

// add our router
const authorRouter = express.Router();

// handle the GET request on root of author-management path,
// i.e. get all authors

authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));
authorRouter.get('/:id', (req, res) => authorController.getAuthorByID(req, res));
authorRouter.post('/', (req, res) => authorController.createAuthor(req, res));
// export the router
module.exports = authorRouter;
