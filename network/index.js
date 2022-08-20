'use strict'

import express  from "express"

const route = express.Router();

import users from '../components/users/network.js';
route.use('/users', users);

import news from '../newsapi/network.js';
route.use('/news', news );




export default route