import express from 'express';
import products from './product';
import config from './config';

const mongodb_url = config.MONGO_DB_URL;
const app = express();


app.get("/api/products", (request, response) => {
  response.send(products.products);
});

app.get("/api/products/:id", (request, response) => {
  const productId = request.params.id;
  console.log("djjf", productId);
  const product=products.products.find((productVal)=>productVal.id===Number(productId));
  console.log(product)
  if (product)
    response.send(product)
  else
    response.status(404).send({ msg: "Product Not Found." })
});


app.listen(5000, () => { console.log("Server started at http://localhost:5000") });