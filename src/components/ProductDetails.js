

import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { domain } from '../Domain/Domain'


const ProductDetails = () => {
    const [products, setproducts] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const getdata = async() =>{
            Axios({
                method: "get",
                url:`${domain}/product/api/get/${ id }/`
            }).then(response=>{
                console.log(response.data)
                setproducts(response.data)
            })
        }
        getdata()
    },[])
    return (
        <div className="container">
            {
                products !== null && (
                <div className="col-md-8 m-auto pt-4">
                    <div className="card mb-4">
                    <img src={products.image} alt="..." />
                        <div className="card-body">
                            <p className="card-text">{ products?.title }</p>
                            <p>{products.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-success">Add to card</button>
                                </div>
                                <p>Price<del>{products.market_price}</del> {products.selling_price}</p>
                                <small className="text-muted">{products.date}</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
            }
            
        </div>

     
    )
}

export default ProductDetails
