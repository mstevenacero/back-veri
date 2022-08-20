import express from 'express';
const route = express.Router();

import controller from './controller.js'


route.post('/', controller.add)
route.get('/', controller.list)
route.get('/usuario/:identification_card',controller.getOne)
route.post('/login',controller.autentication)

export default route