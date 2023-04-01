const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load("./swagger.yaml");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1/Utilisateurs');


app.use(express.json());
app.use(express.urlencoded( { extended: false}));


app.use('/api', userRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.listen(port, () => {
    console.log(`Application started on ${port}`);
});
