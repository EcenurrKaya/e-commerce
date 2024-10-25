import React from 'react'
import { products } from '../../utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div>
        <p className='text-slate-500 px-3 text-xl'>Tüm Ürünler</p>
        <div className='flex items-center gap-3'>
            {
                products.map(product=>(
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products