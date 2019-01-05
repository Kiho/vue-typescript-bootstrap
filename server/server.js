import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
// import uniRouter from './middleware/uniRouter';
import { config } from '../package.json';

const app = express();
app.listen(3001);

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(config.assetsPublicPath, express.static(path.join(__dirname, 'public')));

import api from './api/';
app.use('/api/', api);

