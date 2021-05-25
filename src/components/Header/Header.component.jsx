import {Link} from 'react-router-dom';
import './Header.style.css';
import React, { Component } from 'react'

 class Header extends Component {
    render() {
        const { onCartClick,match:{params}}=this.props;
        return (
            <div className='headerContainer'>
                <div className='headerHeading'>
                <h3 className='headerText'>
                    <Link to={`/`}>Clothing Store</Link></h3>   
                </div> 
                <div className='headerIcon' onClick={onCartClick}>
                    <i className="fas fa-cart-plus"></i>
                </div>
            </div>
        )
    }
}
export default Header