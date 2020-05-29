import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component{

  constructor(){
    super()
    this.state={
      name: '',
      price: '',
      imgurl: ''
    }
    this.cancel=this.cancel.bind(this)
    // this.addToInventory=this.addToInventory.bind(this)
  }

  handleChangeName(name){
    this.setState({name: name})
  }

  handleChangePrice(val){
    this.setState({price: val})
  }

  handleChangeImg(url){
    this.setState({imgurl: url})
  }

  cancel(){
    this.setState({
      name: '',
      price: '',
      imgurl: ''
    })
  }

  addToInventory(){

    this.props.getInventory(this.state.name, this.state.price, this.state.imgurl)
    // axios.post('/api/product', body)
    // .then(res => {this.props.getInventory()})
  }

  render(){
    return (
      <div>Form.js

        <input 
        value={this.state.name} 
        placeholder= 'Product Name'
        onChange={e => this.handleChangeName(e.target.value)}
        />
        <input 
        value={this.state.price}
        placeholder= 'Price'
        onChange={e => this.handleChangePrice(e.target.value)}
        />
        <input 
        value={this.state.imgurl}
        placeholder='paste image url'
        onChange={e => this.handleChangeImg(e.target.value)}
        />

        <button onClick={this.cancel}>Cancel</button>
        <button onClick={this.addToInventory}>Add to Inventory</button>
      </div>

    )
  }
}
