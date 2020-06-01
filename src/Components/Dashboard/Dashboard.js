import React from 'react'
import Product from '../Product/Product'
import './Dashboard.css'

function Dashboard(props){
  const inventoryMap= props.inventory.map((e) => (
    <Product
      key={e.product_id}
      deleteProduct= {props.deleteProduct}
      data={e}
    />
  ));


  return (
    <div class='products'>
      <div>{inventoryMap}</div>
    </div>
  )
}

export default Dashboard