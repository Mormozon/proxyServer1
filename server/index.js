const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const router = require('./router.js')
const port = 3000;

const proxy = express();
proxy.use(helmet());
proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({extended: true}));
// proxy.use(express.static(path.join(__dirname, '../../productDescription/client/dist')));
// proxy.use(express.static(path.join(__dirname, '../../relatedProducts')));
proxy.use(express.static(path.join(__dirname, '../')));
proxy.use(morgan());
proxy.use('/api', router);

// console.log(express.static((path.join(__dirname, '../../productDescription/client/dist'))));
// proxy.get('*', function(req, res) {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
// });
proxy.listen(port, ()=>console.log('server online'));