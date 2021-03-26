// import { Link } from 'react-router-dom'
import React,{ useRef, useState } from 'react'
import axios from 'axios'

import img_avatar2 from './img_avatar2.png'


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    console.log(username)
    console.log(password)
    const loginbutton = (e) => {
        e.preventDefault()
        // Send a POST request
        axios.post('http://localhost:8000/api/token/auth/',{ 
        username: username,
        password: password
        })
        .then(function (response) {
            window.localStorage.setItem('token', response.data['token'])
        console.log(response.data['token']);
        })
        .catch(function (error) {
        console.log(error);
        });
    }


    // Get the modal
    var modal = useRef()



    // When the user clicks anywhere outside of the modal, close it
    window.onClick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
    const formOpen= () =>{
        document.getElementById('id01').style.display="block"
    }

    const formClose= () =>{
        document.getElementById('id01').style.display="none"
    }
    
    return (
        <div>
            <button onClick={formOpen} style={{width:"auto"}}>Login</button>

            <div ref={modal} id="id01" className="modal">
            
            <form className="modal-content animate" action="" method="post">
                <div className="imgcontainer">
                <span onClick={formClose} className="close" title="Close Modal">&times;</span>
                <img src={img_avatar2} alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" name="psw" required />
                    
                <button onClick={loginbutton}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                </div>

                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="button" onClick={formClose} className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
            </div>
        </div>
        
    )
    
}

export default Login


