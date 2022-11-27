const { Router } = require('express');
const Cart = require('../schemas/cart');
const Goods = require('../schemas/goods');

const router = Router();

router.get('/carts', async (req, res) => {
  const carts = await Cart.find({});

  const goodsIds = carts.map((e) => e.goodsId);

  const goods = await Goods.find({ goodsIds });

  const results = carts.map((cart) => {
    return {
      quantity: cart.quantity,
      goods: goods.find((item) => item.goodsId === cart.goodsId),
    };
  });

  res.json({
    carts: results,
  });
});

module.exports = router;
