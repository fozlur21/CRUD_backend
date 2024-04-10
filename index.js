import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/product.route';

const app = express();
const port = 3000;

//* middleware
app.use(express.json());

//* routes
app.get('/', (req, res) => {
    res.send('Hello from node API!')
});

//* CRUD API – Node, Express, MongoDB
app.use('/api/products', productRoutes)

mongoose.connect('mongodb+srv://fizz:k55Ko6Lx115AnQho@mongodbapi.3y9sd8q.mongodb.net/')
    .then(() => {
        console.log('Connected to database!');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        });
    })
    .catch((err) => {
        console.log('Unable to connect to database!', err);
    });
