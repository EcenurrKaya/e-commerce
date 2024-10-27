import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Rating from "@mui/material/Rating";
import Textclip from '../../utils/Textclip';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  let productRating = product.reviews?.reduce((acc, item)=>acc + item.rating, 0) / product?.reviews?.length
  return (
    <Link to={`/detail/${product.id}`}>
      <CardGroup className='w-[240px] flex flex-col flex-1'>
        <Card className='w-auto'>
          <Card.Img variant="top" src={product.image} />
          <Card.Body className='mt-2 space-y-1'>
            <Card.Title>{Textclip(product.name)}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Rating name="read-only" value={productRating} readOnly />
          </Card.Footer>
        </Card>
      </CardGroup>
    </Link>
  )
}

export default ProductCard