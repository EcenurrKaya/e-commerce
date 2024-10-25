import React from 'react'

const Category = () => {
    const categoryList = [
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
    ]


  return (
    <div className='flex overflow-x-auto'>
    {
        categoryList.map((category, item)=>(
            <div className='border rounded-2xl px-4 py-1 mx-4 min-w-[120px] flex flex-1' key={item}>{category.name}</div>
        ))    
    }
  </div>

  )
}

export default Category