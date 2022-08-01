import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios';

import { Link } from 'react-router-dom';

import { Axios } from 'axios';
import GlobalNav from '../view/GlobalNav';
// import {
//     Routes,
//     Route,
//     Link,

// } from "react-router-dom";
export default function Login() {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function postdata() {
        console.log("login testing ")
        axios
            .post("https://daupay.com/api/login", {

                email: email,

                password: password

            })
            .then((response) => {
                // setPost(response.data);
                console.log(response.data);
            });
    }


    return (
        <>
            <GlobalNav />
            <div className="d-lg-flex half">
                <div
                    className="bg order-1 order-md-2"
                />
                <div className="contents order-2 order-md-1">
                    <div className="ccoont">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7">
                                <h3>
                                    Login to <Link to="/"> <strong>Auction    </strong></Link>
                                </h3>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
                                    adipisicing.
                                </p>

                                <div className="form-group first">
                                    <label htmlFor="username">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="your-email@gmail.com"
                                        id="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        name={email}
                                    />
                                </div>
                                <div className="form-group last mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Your Password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        name={password}
                                    />
                                </div>
                                <div className="d-flex mb-5 align-items-center">
                                    <label className="control control--checkbox mb-0">
                                        <span className="caption">Remember me</span>
                                        <input type="checkbox" defaultChecked="checked" />
                                        <div className="control__indicator" />
                                    </label>
                                    <span className="ml-auto">
                                        <a href="#" className="forgot-pass">
                                            Forgot Password
                                        </a>
                                    </span>
                                </div>
                                <button

                                    defaultValue="Log In"
                                    className="btn btn-block btn-primary"
                                    onClick={() => postdata()}
                                >Login</button>
                                <div className='Caccount'>
                                    <p style={{ color: "black", marginTop: 30, textAlign: "center" }}>Or &nbsp; Create Account </p>
                                    <Link to="/cosign">
                                        <button

                                            defaultValue="Log In"
                                            className="btn btn-block btn-secondary"
                                        >Sign-up</button></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
