import React from 'react'
import Product from '../Product/Product'

function Dashboard(props){
  const invMap= props.inventory.map(e => (
    <Product
      key={e.id}
      data={e}
    />
  ))

  return (
    <div>
      <h2>Products</h2>
      <div>{invMap}</div>
    </div>
  )
}

export default Dashboard