const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //Simulate an error condition
  const error = new Error('Something went wrong');
  error.status = 500;
  throw error; // Throwing error without proper handling
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});