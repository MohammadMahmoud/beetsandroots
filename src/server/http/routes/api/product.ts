import express from 'express';
import ProductController from '../../controllers/product';

const Router = express.Router();

class Routing {
  static get(): express.Router {
    const productController = new ProductController();

    // GET api/product
    Router.get('/', productController.getProducts);

    return Router;
  }
}

export default Routing;
