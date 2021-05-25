import './Products.style.css';
import ProductCard from '../ProductCard/ProductCard.component';

const Products = ({dataStore}) => {
   console.log(dataStore)
    return (
        <div className='productList'>
          {
            dataStore.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
    )
}

export default Products



