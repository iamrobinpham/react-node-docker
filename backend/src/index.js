const Koa = require('koa');
const winston = require('winston');
const app = new Koa();

const port = process.env.PORT || 8080;

app.use(async ctx => {
  ctx.body = 'Hello world!';
});

app.listen(port, () => {
  winston.info(`The app has started on port: ${port} 🚀👍🚀`);
});

