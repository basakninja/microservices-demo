const express = require('express');
const fetch = global.fetch;

const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || 'http://localhost:8081';
const CART_SERVICE_URL = process.env.CART_SERVICE_URL || 'http://localhost:8082';
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:8083';

const app = express();
app.use(express.json());

// proxy to product catalog service
app.get('/products', async (req, res) => {
  const response = await fetch(`${PRODUCT_SERVICE_URL}/products`);
  const data = await response.json();
  res.json(data);
});

// get cart contents for a user
app.get('/cart/:userId', async (req, res) => {
  const response = await fetch(`${CART_SERVICE_URL}/cart/${req.params.userId}`);
  const data = await response.json();
  res.json(data);
});

// orchestrate checkout via order service
app.post('/checkout', async (req, res) => {
  const response = await fetch(`${ORDER_SERVICE_URL}/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(req.body) });
  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API Gateway listening on port ${PORT}`));
