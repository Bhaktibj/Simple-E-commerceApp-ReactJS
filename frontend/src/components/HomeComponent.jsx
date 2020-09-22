import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {Card, CardImg,CardBody, CardSubtitle, CardTitle, CardText, CardDeck} from 'reactstrap';
import { listProducts } from '../actions/productActions';

const HomeComponent=(props)=> {
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
        <Card width="20%">
          <CardBody>
        <CardSubtitle key={product.id}>
            <CardSubtitle><Link to={'/product/' + product.id}>
              <CardImg top width="100%" src={product.image} alt="product" />
            </Link></CardSubtitle>
            <CardTitle>
              <Link to={'/product/' + product.id}>{product.name}</Link>
            </CardTitle>
            <CardText>Price: ${product.price}</CardText>
            <CardSubtitle>{product.rate} Stars ({product.review} Reviews)</CardSubtitle>
        </CardSubtitle>
        </CardBody>
        </Card>
        )
    }
  </CardDeck>
  
}
export default HomeComponent;