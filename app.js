const express = require('express');
const connect = require('./schemas');

const app = express();

connect();

app.set('PORT', 3000);

app.use(express.json());

const goodsRouter = require('./routes/goods');
const cartsRouter = require('./routes/carts');

app.use('/api', [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('PORT'), () => {
  console.log('Listing on port', app.get('PORT'));
});
