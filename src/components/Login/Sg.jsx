import React, { useState } from 'react'
import "./Signup.css";
import axios from 'axios';
import city from "../img/city.jpg"
import { Link } from 'react-router-dom';
import GlobalNav from '../view/GlobalNav';

export default function Signup() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [avator, setAvator] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [user_type, setUser_type] = useState("");




    function postdata() {
        console.log("Test")
        axios
            .post("https://daupay.com/api/user", {
                firstname: firstname,
                avator: lastname,
                user_type: user_type,
                email: email,
                phone: phone,
                password: password,

            })
            .then((response) => {
                // setPost(response.data);
                console.log(response.data)
            });
    }

    return (
        <>
        <GlobalNav/>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Register in <Link to="/" >Auction</Link> </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">

                                <div className="row no-gutters">
                                    <div className="col-md-7">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Fill this form</h3>
                                            <div id="form-message-warning" className="mb-4" />
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            {/* <form

                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                            > */}
                                            <div className="row">
                                                {/* fName */}
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label"  >Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Fname"
                                                            // id="username"
                                                            onChange={(e) => setFirstname(e.target.value)} name={firstname}
                                                        />
                                                    </div>

                                                </div>

                                                <div className="col-md-6">
                                                    {/* Email */}
                                                    <div className="form-group">
                                                        <label className="label">Email</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="your-email@gmail.com"
                                                            // id="username"
                                                            onChange={(e) => setEmail(e.target.value)} name={email}

                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    {/* password */}
                                                    <div className="form-group">
                                                        <label className="label">Password</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Your Password"
                                                            // id="password"
                                                            onChange={(e) => setPassword(e.target.value)} name={password}

                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* Phone */}
                                                    <div className="form-group">
                                                        <label className="label">Phone</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Phone number "
                                                            // id="username"
                                                            onChange={(e) => setPhone(e.target.value)} name={phone}

                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    {/* Phone */}
                                                    <div className="form-group">
                                                        <label className="label">Adhaar Card</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Valid Adhaar card number  "
                                                            // id="username"
                                                            onChange={(e) => setPhone(e.target.value)} name={phone}

                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    {/* Phone */}
                                                    <div className="form-group">
                                                        <label className="label">Image</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            style={{ padding: 4 }}
                                                            // id="username"
                                                            onChange={(e) => setPhone(e.target.value)} name={phone}

                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button

                                                            defaultValue="Send Message"
                                                            className="btn btn-primary"
                                                            onClick={postdata}
                                                        >Submit</button>
                                                        <div className="submitting" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap w-100 p-5 img">
                                            <img
                                                className="Alogos"
                                                src={city}
                                                alt="Alogo"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}