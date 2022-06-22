//SET UP SERVER/////////////////////////////////////////////////////////////
// Require Express
const express = require('express');

//Este es un método que nos trae el path
const { join } = require('path')

// Express server handling requests and responses
const app = express();
require('./db')  // Base de datos
//Important to activated views
app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

// our first Route:
app.get('/', (req, res) => {// La barra es lo que se pone en el navegador 
    res.render('index-page') //Esta es la vista
});

const product = require('./models/product-model')

app.get('/tienda', (req, res) => {

    product

        .find()
        .select({ title: 1, description: 1, price: 1, thumbnail: 1, images: 1 })
        .sort({ price: 1 })
        .then(products => {
            res.render('tienda-page', { products })
        })
        .catch(err => console.log(err))
})

// Server Started
app.listen(5005, () => console.log('My first app listening on port 5005! '))

//SET UP SERVER///////////////////////////////////////////////////////
