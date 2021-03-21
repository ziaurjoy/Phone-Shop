

import React from 'react'
import {Link} from 'react-router-dom'

const SingleProduct = ({item}) => {
    return (
        <div className="card single_product">
            <Link to={`/product/${item.id}`}>
                <img src={item.image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
            
            <p className="card-text">{(item.description).substring(0,70)}...<Link to={`/product/${item.id}`}>Read more</Link></p>
                <a to="#" className="btn btn-primary">Add</a>
            </div>
        </div>
    )
}

export default SingleProduct


