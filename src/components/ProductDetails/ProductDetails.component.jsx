import './ProductDetails.style.css'
import React, { Component } from 'react'

 class ProductDetails extends Component {
     
    render() {

        const {dataStore,onAddItemClick,match:{params}}=this.props;
        const productId = this.props.match.params.detail;
        const filterProduct = dataStore.filter(ds=>ds.id===parseInt(productId))
        
        return (
            <div className='productContainer'>
                <div className='productsImg'>
                    <img src={filterProduct[0].imageUrl} alt='prodImg'/>
                </div>
                <div className='productDetailText'>
                  <h2>{filterProduct[0].name}</h2>
                  <p><strong>Price</strong> : {filterProduct[0].price}</p>
                  <p><strong>Description</strong> : {filterProduct[0].description}</p>
                  <button className='btnAddcart' onClick={onAddItemClick}>Add To Cart</button>
                </div>
                
               
            </div>
        )
    }
}


export default ProductDetails

