const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;



/*
* Métodos HTTP:
* GET: Busca/ listar informação;
* POST: Cria informação;
* PUT: Altera informação;
* DELETE: Deleta informação;
*/

/**
*Tipos de parâmetros:
*
*QUERY PARAMS: Parãmentros nomeados enviados na rota após '?' (Filtros, paginação)
*ROUTE PARAMS: Parãmetros usados para identificar recursos
*REQUEST BODY: corpo da rquisição utilizado para criar ou alterar recursos
*/
