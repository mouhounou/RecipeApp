const express = require('express');
const { toAdd, getByUser, getOneByuser } = require('../controllers/favorites');
const routes = express.Router()


routes.post('/', toAdd)

routes.get("/:userId", getByUser);

routes.delete("/:userId/:recipeId", getOneByuser);

module.exports = routes;
