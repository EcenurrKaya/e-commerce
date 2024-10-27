import React from 'react'

const Comment = ({prod}) => {
    console.log(prod.comment)
  return (
    <div>
        {prod?.user?.name}
        {prod.comment}
    </div>
  )
}

export default Comment