import React from 'react'
import './cartItem.style.css'
const CartItem = ({cartItems,onPlusClick,onMinusClick}) => {
    
    return (
        <div className='itemContainer'>
            <div className='itemText'>
                <p className='item'>{cartItems.itemName}</p>
                <p className='item'>{cartItems.itemPrice}</p>
                <p className='item'>
                    <i className="fas fa-plus-circle" onClick={()=>onPlusClick(cartItems.id)}></i>
                </p>
                <p className='item'>{cartItems.qty}</p>

                <p className='item'>
                    <i className="fas fa-minus-circle" onClick={()=>onMinusClick(cartItems.id)}></i>
                </p>
                <p className='item'>= {parseInt(cartItems.itemPrice)* parseInt(cartItems.qty)}</p>
            </div>
          
        </div>
    )
}

export default CartItem