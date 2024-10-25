import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const ProductCard = ({product}) => {
  return (
    <CardGroup className='w-[240px] flex flex-col flex-1'>
      <Card className='w-auto'>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default ProductCard