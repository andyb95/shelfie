import React from 'react'
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios'

function Dashboard(props){

  const deleteProduct = (product_id) => {
    console.log(product_id)
    axios.delete(`/api/product/${product_id}`)
    .then((res) => {
      this.props.getInventory()
      // window.location.reload()

    })
    .catch(err => console.log('could not delete', err))
  }

  
  
  const inventoryMap= props.inventory.map((e) => (
    <Product
      key={e.product_id}
      product={e}
      // isEditing = {props.isEditing}
      editProduct= {props.editProduct}
      deleteProduct= {deleteProduct}
      selectProduct = {props.selectProduct}
    />
  ));
    
    // const {product_id, name, price, imgurl} = props.inventory
    return (
      <div>
      <div className = 'products'>{inventoryMap}</div>
    </div>
  )
}

export default Dashboard