import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../utils/Products';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from "@mui/material/Rating"
import Comment from './Comment';

const Detail = () => {
    const {id} = useParams();
    const product = products.find((prod)=>prod.id===id)
    let productRating = product?.reviews?.reduce((acc, item)=> acc + item.length,0) / (product?.reviews?.length || 1)
  return (
    <Container>
    <Row>
      <Col md={{ span: 3, offset: 2 }}>
        <img src={`${product?.image}`}/>
      </Col>
      <Col md={{ span: 3, offset: 1 }}>
        <div>
          <h3>{product?.name}</h3>
          <Rating name="read-only" value={productRating} readOnly />
        </div>
        <div>
          <div>{product.description}</div>
          <div>{product.price}</div>
        </div>
      </Col>
    </Row>
    <div>
      <h3>Yorumlar</h3>
      {product?.reviews?.length>0?(
        product?.reviews?.map((prod)=>(
          <Comment key={prod.id} prod={prod}/>
        ))
      ):(
        <p>Henüz yorum yok</p>
      )
      }
    </div>
  </Container>
  )
}

export default Detail