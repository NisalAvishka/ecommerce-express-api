import express from 'express';
import ProductsRoutes from './routes/products/index'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/v1/products', ProductsRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});