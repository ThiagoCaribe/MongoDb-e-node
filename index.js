//backEnd, primeiro é criado um servidor  usando express
// O professor recomenda usar o yarn para instalações dos pacotes


const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(morgan('dev')); // estamos trabalhando em um servido dev
app.use(express.json());

const routes  = require('./src/routes/mainRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/Netflix')
  .then(() => console.log('Connected!'));

app.listen(3000, () =>{
    console.log('meu servidor está funcionando');
});

app.use('/', routes);

// Rotas

/*
    Conceito CRUD: create, read, update, delete é meio que o arroz com feijão
*/
// mongoosse ajuda para trabalhar com JS no mongoDb
