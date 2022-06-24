const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000 || process.env.port;
const connection= require('./config/db');

connection();

app.use(express.json());
app.use('/',require('./routes/api/apis'));
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(PORT, () => {
  console.log(`App started on ${PORT}`);
});
