require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger.json');
const swaggerJsdoc = require('swagger-jsdoc');
const express = require('express')



const cors = require('cors')

const bodyParser = require('body-parser')



const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('./health', require('./routes/healthcheck.js'))
app.use('/product', require('./routes/products'));
app.use('/user', require('./routes/user.js'))

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    headers={"cache-control": "no-cache"}
    body={"status": "available", message: "Hello World"}
    res.status(200).send(body)
})

module.exports = app