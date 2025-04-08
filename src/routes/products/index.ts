import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Products List');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Product Details for ID: ${id}`);
});

router.post('/', (req, res) => {
  res.send('Create a product');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Update product with ID: ${id}`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Delete product with ID: ${id}`);
});

export default router;