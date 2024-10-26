import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../../utils/Products';

const Detail = () => {
    const {id} = useParams();
    const product = products.find((prod)=>prod.id===id)
    console.log(product)
  return (
    <div>{product?.name}</div>
  )
}

export default Detail