import React from 'react'

import Products from  '../components/Products/Products.component'

function Homepage({dataStore}) {
    return (
        <div>
            
            <Products dataStore={dataStore}/>
        </div>
    )
}

export default Homepage
