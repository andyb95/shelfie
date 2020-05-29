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
      inventory: []
    }

    this.getInventory=this.getInventory.bind(this)
  }  

  componentDidMount(){
    this.getInventory()
    
    console.log(`Inventory: ${this.state.inventory}`)
  }

  getInventory(name, price, imgurl){
    const body = {name, price, imgurl}
    axios.get('/api/inventory', body)
    .then((res) => {
      this.setState({inventory: res.data})
      console.log('!', res.data)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form 
        getInventory={this.getInventory}
        />
      </div>
    );
  }
}


