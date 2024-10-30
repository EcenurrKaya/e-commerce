import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../utils/Products';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from "@mui/material/Rating"
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Detail = () => {
    const {id} = useParams();
    const product = products.find((prod)=>prod.id===id)
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const handleInc = () => setQuantity(quantity+1);
    const handleDesc = () => setQuantity(quantity>1? quantity-1 : 1);

    const handleAddtoCart=()=>{
      dispatch(addToCart({
        id:product.id, 
        name: product.name,
        description: product.description, 
        price: product.price,
        quantity: quantity,
        image: product.image,
        instock: product.inStock
      }));
    }

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
          <div>
            <p>Stok Durumu:</p>
          {
            product.inStock ? <div>Ürün mevcut</div> : <div>Ürün stokta yok</div>
          }
        </div>
        </div>
        <div className='flex'>
          <button onClick={handleDesc} className='w-8 h-auto border flex items-center justify-center text-lg rounded-md'>-</button>
          <span className='text-lg mx-2'>{quantity}</span>
          <button onClick={handleInc} className='w-8 h-auto border flex items-center justify-center text-lg rounded-md'>+</button>
        </div>
        <div className='text-3xl text-orange-600 font-bold'>{product.price} $</div>
        <button className='rounded-lg p-3 my-2 bg-black text-white w-[250px]' onClick={handleAddtoCart}>Sepete Ekle</button>
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