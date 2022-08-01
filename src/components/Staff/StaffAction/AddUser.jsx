import axios from 'axios';
import React, { useState } from 'react'
import GlobalNav from '../../view/GlobalNav'
import "./addproduct.css"
export default function AddUser() {

    const [fname, setFname] = useState("");
    const [avatorimg, setAvatorimg] = useState("");
    const [user_type, setUser_type] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [adharcardnum, setAdharcardnum] = useState("");


    function postdata() {
        console.log("Test")
        axios
            .post("https://daupay.com/api/user", {

                fname: fname,
                avatorimg: avatorimg,
                user_type: user_type,
                email: email,
                phone: phone,
                password: password,
                adharcardnum: adharcardnum,
            })
            .then((response) => {

                console.log(response.data)
            });
    }
    return (
        <>
            <GlobalNav />
            <div className='mainconn'>
                <div className="conntiner">
                    <div className="title">Add User's</div>
                    <div className="connttent">
                        <div >
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">  Name</span>
                                    <input type="text" placeholder="Enter name" required="" onChange={(e) => setFname(e.target.value)} name={fname} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter email" required="" onChange={(e) => setEmail(e.target.value)} name={email} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="text" placeholder="Enter Password of 8 letters and digits" required="" onChange={(e) => setPassword(e.target.value)} name={password} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone</span>
                                    <input type="text" placeholder="Enter Ph.Number" required="" onChange={(e) => setPhone(e.target.value)} name={phone} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Img</span>
                                    <input type="text" placeholder="text img" required="" onChange={(e) => setAvatorimg(e.target.value)} name={avatorimg} />
                                </div>
                                <div className="input-box">
                                    <span className="details">User type</span>
                                    <input type="text" placeholder="Premium / Platinum" required="" onChange={(e) => setUser_type(e.target.value)} name={user_type} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Adhaar card</span>
                                    <input type="text" placeholder="Enter adhaar card no." required="" onChange={(e) => setAdharcardnum(e.target.value)} name={adharcardnum} />
                                </div>

                                {/* 
                                <div className="input-box">
                                    <span className="details">Image</span>
                                    <input type="file" style={{ padding: 4 }} required="" />
                                </div> */}
                            </div>

                            <div className="button">
                                <button defaultValue="Register" className='onpostdatabtn' onClick={() => postdata()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}