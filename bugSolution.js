const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  try {
    //Simulate an error condition
    const error = new Error('Something went wrong');
    error.status = 500;
    throw error;
  } catch (error) {
    next(error); // Pass the error to error-handling middleware
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});