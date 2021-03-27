import React, { useState } from 'react'
import { useGlobalState } from '../state/provider'
import Axios from 'axios'

const Profile = () => {
    const [{ profile }, disptach] = useGlobalState()


    const [firstname, setFirstname] = useState(profile?.new_user?.first_name)
    const [lastname, setLasename] = useState(profile?.new_user?.last_name)
    const [email, setemail] = useState(profile?.new_user?.email)
    const [image, setImage] = useState(null)
    console.log(image)

    const updatedata = async (e) => {
        e.preventDefault()
        await Axios({
            method: "post",
            url: `http://localhost:8000/userprofile/api/proflie/update/view/`,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`
            },
            data: {
                "first_name": firstname,
                "last_name": lastname,
                "email": email
            }
        }).then(response => {
            // console.log(response.data["message"]);
            disptach({
                type: "PAGE_RELOAD",
                pagereload: response.data
            })
        })

    }

 

    const updateimage = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('image', image)
        await Axios({
            method: "post",
            url: `http://localhost:8000/userprofile/api/proflie/update/image/view/`,
            headers: {
                Authorization: `token ${window.localStorage.getItem('token')}`
            },
            data: formdata
        }).then(response => {
            console.log(response.data);
        })

    }
    



    const card = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
        fontFamily: "arial"
      }

    const title = {
        color: "grey",
        fontSize: "18px"
      }



    return (
        <div>
            <h2 style={{textAlign:"center"}}>User Profile Card</h2>

            <div className="card" style={card}>
                <img src={"http://localhost:8000"+profile?.user_image} alt="John" style={{width: "100%"}} />
                <h1>{profile?.new_user?.username}</h1>
                <p className="title" style={title}>CEO & Founder, Example</p>
                <p>Full Name : {profile?.new_user?.first_name} {profile?.new_user?.last_name}</p>
                <p>{profile?.new_user?.email}</p>
                <form method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <label>Profile Pic Uplod</label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" class="form-control" />
                        <button onClick={updateimage} class="btn btn-primary my-2">Update</button>
                    </div>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" onChange = {(e) =>{setFirstname(e.target.value)}} class="form-control" value={firstname} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" onChange={(e) => {setLasename(e.target.value)}} class="form-control" value={lastname} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={(e) =>{setemail(e.target.value)}} class="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" onClick={updatedata} class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
        
    )
}

export default Profile
