import React from 'react'
import GlobalNav from '../view/GlobalNav'
import "./Staffprofile.css"
import { Link } from 'react-router-dom';
import aki from "../img/aki.jpg";
export default function EditProfile() {
    return (

        <>
            <GlobalNav />
            <div className="container emp-profile">
                <div method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img
                                    src={aki}
                                    alt=""
                                ></img>
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-32 " style={{ textAlign: "center", marginTop: 24 }}>
                            <h3>Edit your profile </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">


                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-3">
                                            <input style={{ padding: 6, marginTop: 3, height: 30 }} placeholder="Name"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-3">
                                            <input style={{ padding: 6, marginTop: 3, height: 30 }} placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-3">
                                            <input style={{ padding: 6, marginTop: 3, height: 30 }} placeholder="Phone Number "></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Password</label>
                                        </div>
                                        <div className="col-md-3">
                                            <input style={{ padding: 6, marginTop: 3, height: 30 }} placeholder="Enter password "></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label>Confirm-Password</label>
                                        </div>
                                        <div className="col-md-3">
                                            <input style={{ padding: 6, marginTop: 3, height: 30 }} placeholder="Re-Enter Password "></input>
                                        </div>
                                    </div>
                                    <div className='edditbtndiv'>
                                        <button className='editbtn' style={{}}>Save</button>
                                        </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}