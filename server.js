const express = require('express');
const app = express();
const PORT = 3000 || process.env.port;
const connection= require('./config/default');
const path = require('path');
connection();

app.use(express.json());

app.use('/api/createItem',require('./routes/api/apilist'));
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
