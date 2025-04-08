import { Request, Response } from 'express';

export function listProducts(req: Request, res: Response) {
  res.send('Products List');
}

export function getProductById(req: Request, res: Response) {
    const { id } = req.params;
    res.send(`Product Details for ID: ${id}`);
}

export function createProduct(req: Request, res: Response) {
    res.send('Create a product');
}

export function updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    res.send(`Update product with ID: ${id}`);
}

export function deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    res.send(`Delete product with ID: ${id}`);
}