import React, { useContext } from 'react'
import { AddProduct } from '../../Component/Usecontext/Usecontext'

const Category = () => {

    const {category, setCategory}=useContext(AddProduct)
    console.log(category, "12345")
  return (
    <div>Category</div>
  )
}

export default Category