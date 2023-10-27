const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const data = require('./database/products.json')

app.get('/api/products',  (req, res) =>  {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})
app.get('/api/products/:id',  (req, res) =>  {
  const id = req.params.id
  res.send(JSON.stringify(data.products[id-1]))
})
 
 

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
