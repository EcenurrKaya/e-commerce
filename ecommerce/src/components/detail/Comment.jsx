import { Rating } from '@mui/material'
import React from 'react'

const Comment = ({prod}) => {
    console.log(prod.comment)
  return (
    <div className='border w-full md:w-1/3 p-2 rounded-lg my-3'>
      <div>
       <div className='font-bold'>{prod?.user?.name}:</div>
        <Rating name='read-only' value={prod?.user?.rating} size='small' readOnly/>
      </div>
       <div>{prod.comment}</div>
    </div>
  )
}

export default Comment