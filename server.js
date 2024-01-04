const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  // Process the webhook data here

  res.status(200).send('Webhook received!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Webhook server is listening on port ${port}`);
});