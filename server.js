// server.js or app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // This is correct

app.get('/', (req, res) => {
  res.send('Hello from Node.js on Elastic Beanstalk!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
