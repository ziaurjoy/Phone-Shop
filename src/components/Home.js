import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { domain } from '../Domain/Domain'
import SingleProduct from './SingleProduct'

const Home = () => {
    const [products, setproducts] = useState(null)
    useEffect(() => {
        const getdata = async() =>{
            Axios({
                method: "get",
                url:`${domain}/product/api/list/`
            }).then(response=>{
                console.log(response.data)
                setproducts(response.data)
            })
        }
        getdata()
    },[])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                    {
                        products !== null &&
                        products?.results.map((item, i) =>(
                            <div key={i} className='col-md-4 my-2' >
                                <SingleProduct item={item} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
