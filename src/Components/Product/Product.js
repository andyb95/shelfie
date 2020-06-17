import React from 'react'
import './Product.css'

export default function Product (props) {
  const {product_id, name, price, imgurl} = props.product
  const {deleteProduct, selectProduct} = props
  return (
    <div className='product'>
      <img src={imgurl} alt={name}/>
      <div className='desription'>
        <h1 className='font'>{name}</h1>
        <h1 className='font'>${price}</h1>
      </div>  
      <div className='buttons'>
        <button className='product-button' onClick={() => deleteProduct(product_id)}>DELETE</button>
        <button className='product-button' onClick={()=> selectProduct(props.product)}>EDIT</button>
      </div>
    </div>
  )
}

