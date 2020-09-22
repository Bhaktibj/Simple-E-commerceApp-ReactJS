import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import {Card, CardTitle, CardSubtitle , Button} from 'reactstrap';

const ProductComponent=(props) =>{
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product,loading, error } = productDetails;
  const dispatch = useDispatch();

  console.log("sddcklclkx", props.match.params.id)
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
  }

  function isAdded() {
    const isAdded =
      product.length > 0 &&
      product.find(prod => product.id === product.id);
    return isAdded;
  }

  return <div>
    <div className="back-to-result">
      <Link to="/">Back to Home</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="details">
            <div className="">
              <img src={product.image} alt="product" ></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {product.rate} Stars ({product.review} Reviews)
          </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
            <div>
                    {product.content}
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className="details-action"> */}
            <div>
            <Card body outline color="secondary">
                  <CardTitle>Price: {product.price}</CardTitle>
                 <CardSubtitle>Status: {product.countInStock > 0 ? "In Stock" : "Out of Stock."}</CardSubtitle>
                 <CardSubtitle>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                  </CardSubtitle>
                {product.countInStock > 0 && <Button onClick={handleAddToCart} className="button primary">
                  <i className="fa fa-shopping-cart"></i>{' '}
                  {!isAdded() ? 'Add to Cart' : 'Added to Cart'}
                    Add to Cart</Button>
                  }
              </Card>
            </div>
            
          </div>
        )
    }
  </div>
}
export default ProductComponent;