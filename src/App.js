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
      currentProduct: {},
      isEditing: false
    }
    // this.getInventory=this.getInventory.bind(this)
    // this.editProduct=this.editProduct.bind(this)
    // this.selectProduct=this.selectProduct.bind(this)

  }  

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({inventory: res.data})
      
    })
    .catch(err => console.log(err))
  }

  selectProduct = (product) => {
    this.setState({
      currentProduct: product,
      isEditing: true
    })
    console.log(this.state.currentProduct)
  }

  toggleEdit=()=>{
    if (!this.state.isEditing){
      this.setState({
        isEditing: true
      })

    } else {
      this.setState({
        isEditing: false
      })
    }
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <div className = 'content'>
          <Dashboard 
            inventory={this.state.inventory}
            getInventory={this.getInventory}
            toggleEdit={this.toggleEdit}
            selectProduct={this.selectProduct}
            // isEditing={this.state.isEditing}
            // deleteProduct={this.deleteProduct}
            />
          <Form 
            getInventory={this.getInventory}
            inventory={this.state.inventory}
            isEditing={this.state.isEditing}
            toggleEdit={this.toggleEdit}
            product = {this.state.currentProduct}
            selectProduct={this.selectProduct}
            // editProduct={this.editProduct}
          />  
        </div> 
      </div>
    );
  }
}


