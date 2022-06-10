const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require ('./routes/users');
const productsRouter = require ('./routes/products');
const stockMovementsRouter = require ('./routes/stockMovements');
const petRouter = require ('./routes/pet');
const dayRouter = require ('./routes/day');
const bookingRouter = require ('./routes/booking');

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/stockmovements', stockMovementsRouter);
app.use('/pets', petRouter);
app.use('/days', dayRouter);
app.use('/booking', bookingRouter);


app.listen(port, () =>{

    console.log(`Server is running on port: ${port}`);
});