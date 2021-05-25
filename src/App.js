import React, { Component } from 'react'
import './App.css';
import Data from './data/data'
import Header from './components/Header/Header.component'
import Homepage from './Pages/Homepage'
import {Route,Switch} from 'react-router-dom'
import ProductDetails from './components/ProductDetails/ProductDetails.component'
import Cart from './components/Cart/Cart.component'
import HireMe from './components/HireMe/Hireme.component'

class App extends Component  {
  constructor(props){
    super(props);
    this.state= {
      store:Data,
      cardDisplay:false,
      cartItemList:[]
    }
  }

  onCartClick= () =>{
    this.setState({...this.state, cardDisplay:!this.state.cardDisplay})
  }

  onAddItemClick=(e)=>{
    let itemName = e.target.parentNode.childNodes[0].innerText;
    let itemPrice = e.target.parentNode.childNodes[1].innerText.split(':')[1];

   //Checkin if ItemName already present in cart
   let found = 0;
   let pItems = this.state.cartItemList;
   pItems.forEach(pItem=>{if(pItem.itemName===itemName){
    found =1;
   }})

   if(found===0) { this.setState({...this.state, 
      cardDisplay:true, 
      cartItemList : [...this.state.cartItemList,{'id':Math.floor(Math.random() * 5000),'itemName':itemName,'itemPrice':itemPrice,'qty':1}]
    })}
  }

  onPlusClick=(e)=>{
    let newcardItemList = this.state.cartItemList.map(ncl=>ncl.id===e?{...ncl,qty:ncl.qty+1}:ncl)
    this.setState({...this.state,cartItemList:newcardItemList})
  }
  onMinusClick=(e)=>{
   
   let newcardItemList = this.state.cartItemList.map(ncl=>ncl.id===e?{...ncl,qty:ncl.qty-1<0?0:ncl.qty-1}:ncl)
   this.setState({...this.state,cartItemList:newcardItemList})
  }
  render() {
    const dataStore =this.state.store;
    const cardDisplay = this.state.cardDisplay;
    const cartItemList = this.state.cartItemList;
   
    return (
      <div className="App">
       
        <Route path='/' render={(props)=> <Header onCartClick={this.onCartClick} {...props}/>} />
        <Switch>
          <Route exact path='/' 
            render={(props)=> <Homepage 
            dataStore={dataStore} {...props}/>}/>
          <Route 
            exact path='/details/:detail' 
            render={(props)=><ProductDetails 
            dataStore={dataStore} 
            onAddItemClick={this.onAddItemClick} {...props}/>}/> 
            
        </Switch>
        <Route path='/' 
          render={(props)=> <Cart 
          cardDisplay={cardDisplay} 
          onPlusClick={this.onPlusClick}
          onMinusClick={this.onMinusClick}
          cartItemList={cartItemList} {...props}/>} />
        <Route exact path='/HireMe' component={ HireMe} />
      </div>
    );
  }
}

export default App;
