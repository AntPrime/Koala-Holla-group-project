const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const koalaRouter = require('./routes/koala.router');

app.use(express.json());
app.use(express.static('server/public'));

const koalasList = [
  {
    name: "NAME",
    age: 54,
   favoriteColor:  "RED",
   readyToTransfer: Boolean,
   notes: "BLAHBLAHBLAH"
  }
]

// ROUTES
app.use('/koalas', koalaRouter);
app.get('/koalas', (req, res) => {
  console.log(`In /koalas GET`);
  res.send(koalasList);
});
// creating route to POST
app.post('/koalas', (req, res) => {
  console.log(`In /koalas POST with`, req.body);
  koalasList.push(req.body);
  res.sendStatus(201);
});

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
