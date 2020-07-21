import express from 'express';
import productsList from '../../enum/product-mockup';

interface IProductController {
  getProducts(req: express.Request, res: express.Response): Promise<void>;
}

export default class ProductsController implements IProductController {
  // GET api/product
  public async getProducts(
    req: express.Request,
    res: express.Response
  ): Promise<void> {
    res.status(200).json(productsList);
  }
}
