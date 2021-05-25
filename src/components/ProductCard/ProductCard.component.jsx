
import './ProductCard.style.css'
import {Link} from 'react-router-dom'

function ProductCard({product}) {
    return (
        <div className='productCardDetails'>
            <div className='productCards'>
                <img src={product.imageUrl} alt='' className='productImg'/>
                <div className='productText'>
                    <h4>{product.name}</h4>
                    <p> <strong>Price : </strong>{product.price} Rs</p>
                    <div className='btnMoreDetail'>
                        <Link to={`/details/${product.id}`}>
                        More Details
                        </Link>
                    </div>
                    
                </div>
              
            </div>
        </div>
    )
}

export default ProductCard
