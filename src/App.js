import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import axios from 'axios';


export default class App extends Component {

  constructor(){
    super()
    this.state={
      inventory: [],
      currentProduct: null
    }
    this.getInventory=this.getInventory.bind(this)
    this.deleteProduct=this.deleteProduct.bind(this)
  }  

  componentDidMount(){
    this.getInventory()
    
  }

  getInventory (name, price, imgurl){
    const body = {name, price, imgurl}
    axios.get('/api/inventory', body)
    .then((res) => {
      this.setState({inventory: res.data})
    })
  }


  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
    .then(res => {
      this.getInventory()
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <div class = 'content'>
          <Dashboard 
            inventory={this.state.inventory}
            deleteProduct={this.deleteProduct}
          />
          <Form 
            getInventory={this.getInventory}
            currentProduct={this.state.currentProduct}
          />  
        </div> 
      </div>
    );
  }
}


