import React, { useEffect } from 'react'
import Axios from 'axios'



const Home = () => {
    useEffect(() => {
        const getdata = async() =>{
            Axios({
                method: "get",
                url:`http://localhost:8000/product/api/get/`
            }).then(response=>{
                console.log(response.data)
            })
        }
        getdata()
    },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Home
