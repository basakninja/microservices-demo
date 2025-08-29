const express = require('express');
const app = express();
app.use(express.json());

app.post('/payment', (req, res) => {
  const { amount } = req.body;
  // simulate payment processing
  res.json({ status: 'paid', transactionId: 'TXN-' + Date.now(), amount });
});

const PORT = process.env.PORT || 8084;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));
