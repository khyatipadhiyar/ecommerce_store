
import React, { Component } from 'react'
import './Cart.style.css';
import CartItem from '../CartItems/CartItem.component'
import {Link} from 'react-router-dom'
class Cart extends Component {
    render() {
        const {cardDisplay,cartItemList,onPlusClick,onMinusClick,match:{params}}=this.props;
        console.log(cardDisplay,cartItemList)
        let cartClass = 'cartContainer' 
        if(cardDisplay===false){
            cartClass= cartClass+' cartNoDisplay'
        }

        //calculat total
        let total=0;
        cartItemList.map(cal=>{
            let itemTotal=parseInt(cal.itemPrice)* parseInt(cal.qty);
            total=total+itemTotal;
        })

        return (

            <div className={cartClass}>
                 <h3>My Awesome Items</h3>
                 {cartItemList.map((cartItems)=>(  
                 <CartItem key={cartItems.id}
                    cartItems={cartItems} 
                    onPlusClick={onPlusClick}
                    onMinusClick={onMinusClick}/>
                 ))}
                 <Link to='/hireme'>
                    <button className='checkoutBtn'>CheckOut Total = {total}</button>
                 </Link>
               
            </div>

        )
    }
}
export default Cart