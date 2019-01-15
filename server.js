const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello API');
});
app.listen(3005 || undefined, () => {
  console.log('API app started');
});