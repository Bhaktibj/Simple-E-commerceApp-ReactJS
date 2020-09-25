import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {Card, CardImg,CardBody, CardSubtitle, CardTitle, CardText, CardDeck} from 'reactstrap';
import { listProducts } from '../actions/productActions';

const ProductsComponent=(props)=> {
  const productList = useSelector(state=>state.productList);
  console.log(productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
    };
  }, [])
  return loading ? <div>Loading...</div> :
  error ? <div>{error}</div> :
  <CardDeck>
    { 
      products.map(product =>
        <CardBody>
        <Card>
          <CardBody>
        <CardSubtitle key={product.id}>
            <CardSubtitle><Link to={'/product/' + product.id}>
              <CardImg src={product.image} alt="product" style={{ width: "100px", height: "200px" }} />
            </Link></CardSubtitle>
            <CardTitle>
              <Link to={'/product/' + product.id}>{product.name}</Link>
            </CardTitle>
            <CardText>Price: ${product.price}</CardText>
            <CardText>{product.rate} Stars ({product.review} Reviews)</CardText>
        </CardSubtitle>
        </CardBody>
        </Card>
        </CardBody>
        )
    }
  </CardDeck>
  
}
export default ProductsComponent;