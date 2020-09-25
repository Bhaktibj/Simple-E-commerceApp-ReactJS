import express from 'express';
import products from './product';
import * as config from './config';
import mongoose from 'mongoose';
import userRoutes from './router/userRoutes';
import bodyParser from 'body-parser';

const mongodb_url = config.MONGO_DB_URL;
console.log("mog", mongodb_url)
const app = express();
mongoose.connect(mongodb_url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error=>console.log(error.reason));

app.use(bodyParser.json());
app.use("/api/users", userRoutes);
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