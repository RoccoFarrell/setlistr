const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const dotenv = require('dotenv').config()
const app = new Koa(); 
const bandsRouter = new Router();

const cors = require('koa2-cors')

app.use(logger())
app.use(cors())

require('./routes/bands')({ bandsRouter });

// tells the router to use all the routes that are on the object
app.use(bandsRouter.routes());
app.use(bandsRouter.allowedMethods());

let port = 4000

app.listen(port);
console.log('App live on ' + port)