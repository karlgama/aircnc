const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

/* => Devemos colocar o ./, para dizer que é um diretório, se não ele tenta achar uma
*      dependência instalada com o nome routes
*/
const routes = require('./routes');
    

/* Criação da aplicação */
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-86ga0.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());

/* => Falamos pro express utilizar o formato json, assim, podemos acessar o body das 
 *      requisições 
 */
app.use(express.json());

/* => Rota de '/files' para as imagens */
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

/* => Falamos pro app utilizar as rotas que criamos
 *      ps: é importante colocar abaixo do express, se não ele não é "importado" na hora
 *          que configuramos as rotas no arquivo routes
 */
app.use(routes);
app.listen(3333);