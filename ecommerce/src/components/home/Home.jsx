import React from 'react'
import Category from './Category'
import Banner from './Banner'
import Products from './Products'

const Home = () => {
  return (
    <div className='flex-grow'>
        <Category/>
        <Banner/>
        <Products/>
    </div>
  )
}

export default Home