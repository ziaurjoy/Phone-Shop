import { Link } from 'react-router-dom'
import React, { Component } from 'react'


export default class Bands extends Component {
    
    constructor() {
        super();
        this.state = { data: [] };
      }
    
      componentDidMount() {
        fetch(`http://localhost:8000/product/api/phone/company/filter/list/${this.props.match.params.id}`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }


    render() {
        const myArr = this.state.data;

        return (
            <div className='container'>
                <h1>Hello Band</h1>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                    { myArr &&
                        myArr.map((item, i)=>(
                            <li key={i}  className="col-md-4 my-2" style={{listStyleType:"none"}}>
                                <div className="card single_product">
                                    <Link to={`/product/${item.id}`}>
                                        <img src={"http://localhost:8000" + item.image} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <h5 className="card-title">Band {item.category["category_name"]}</h5>
                                    
                                        <p className="card-text">{(item.description).substring(0,70)}...<Link to={`/product/${item.id}`}>Read more</Link></p>
                                        <a to="#" className="btn btn-primary">Add</a>
                                    </div>
                                    <div className="card-footer">
                                        <p>Price<del>{item.market_price} </del>{item.selling_price}</p>
                                    </div>
                                </div>
                            </li>
                        
                        ))
                    }
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}




