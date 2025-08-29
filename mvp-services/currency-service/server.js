const express = require('express');
const app = express();

app.get('/convert', (req, res) => {
  const amount = parseFloat(req.query.amount || '0');
  const rate = 0.9; // fixed rate USD->EUR
  const converted = amount * rate;
  res.json({ from: req.query.from, to: req.query.to, amount, converted });
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => console.log(`Currency Service running on port ${PORT}`));
