import React, {Component} from 'react'
import './Product.css'

export default class Product extends Component{

  componentDidMount(){
  }

  render(){
    return (
      <div className='product'>
        <img src={this.props.data.imgurl} alt={this.props.data.name}/>
        <div className='desription'>
          <h1 class='font'>{this.props.data.name}</h1>
          <h1 class='font'>${this.props.data.price}</h1>
        </div>  
        <div class='buttons'>
          <button class='product-button' onClick={() => this.props.deleteProduct(this.props.data.product_id)}>DELETE</button>
          <button class='product-button' >EDIT</button>
        </div>
      </div>
    )
  } 
}

