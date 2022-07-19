import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate();
  const { product } = props;
  const { rating } = product;

  const handleClick = () => {
    // go to product detail page
    navigate(`/product/${product.id}`);
  }

  return (
    <div className='product__card'>
      {/* <Link to={`/product/${product.id}`}> */}
        <div className='product__card--img'>
          <img src={product.image} alt={product.title} />
          <div className='product__card--rating'>
            {
              Array(Math.round(rating.rate)).fill().map((_, i) => {
                return <span key={i}>⭐️</span>
              })
            }
            {rating.rate}
            <br />
            <h3 className='product__card--title'> {product.title} </h3>

            <button onClick={handleClick}>
              Ver Detalle
            </button>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Card
