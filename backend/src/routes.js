const express = require('express');

const ongController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/session',SessionController.store)

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.store)

routes.get('/profile', ProfileController.index)

routes.get('/incidents',IncidentController.index)
routes.post('/incidents',IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;