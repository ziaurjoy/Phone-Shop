
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import logo from './phone.png'
import Login from './Login'
// import Bands from './Bands'



export default class Navbar extends Component {

    constructor() {
        super();
        this.state = { data: [] };
      }
    
      componentDidMount() {
        fetch(`http://localhost:8000/product/api/phone/company/list/`)
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }

    render() {
        const myArr = this.state.data;
        console.log(myArr.results) 

        const logostyle = {
            height: "50px",
            width: "50px",
            padding: "0px",
            mergin: "0px"
        }


        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img style={logostyle} src={logo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bands
                                </a> 
                                <ul className="dropdown-menu border-0" aria-labelledby="navbarDropdown">
                                { myArr.results &&
                                    myArr.results.map((item, i)=>(
                                        <li key={i}  className="">
                                            <Link to={`/company/${item.id}`} className="text-decoration-none"><h3>{item.category_name}</h3></Link>
                                        </li>
                                    
                                    ))}
                                </ul>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Login />
                    </div>
                </div>
             </nav>
        )
    }
}
