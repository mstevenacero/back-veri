import express from 'express';

const route = express.Router();

import controller from './apinews.js'


route.post('/', controller.news)


export default route