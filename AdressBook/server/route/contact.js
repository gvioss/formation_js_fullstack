const Router = require('express').Router;
const bodyParser = require('body-parser');
const controller = require('../controller/contact');

const routes = new Router();

routes.get('/', controller.list);
routes.post('/', bodyParser.json(), controller.create);
routes.get('/:id', controller.show);
routes.delete('/:id', controller.remove);

module.exports = routes;