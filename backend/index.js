const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const dotenv = require('dotenv').config()
const app = new Koa(); 
const bandsRouter = new Router();

app.use(logger())

require('./routes/bands')({ bandsRouter });

// tells the router to use all the routes that are on the object
app.use(bandsRouter.routes());
app.use(bandsRouter.allowedMethods());

app.listen(4000);