import React from 'react'
import GlobalNav from '../../view/GlobalNav'
import "./addproduct.css"
export default function EditProducts() {
    return (
        <>
            <GlobalNav />
            <div className='mainconn'>            <div className="conntiner">
                <div className="title">Edit Product's </div>
                <div className="connttent">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Product Name</span>
                                <input type="text" placeholder="Enter Product name" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Making Year</span>
                                <input type="text" placeholder="Enter Manufacturing date" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Brand</span>
                                <input type="text" placeholder="Enter Brand" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Model</span>
                                <input type="text" placeholder="Enter Model" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Driven</span>
                                <input type="text" placeholder="Enter Driven Km" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Accidental</span>
                                <input
                                    type="text"
                                    placeholder="Yes/No"
                                    required=""
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Transmission</span>
                                <input type="text" placeholder="Auto / Mannual" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Insurance</span>
                                <input type="text" placeholder="Yes / No" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Fuel</span>
                                <input type="text" placeholder="Diesel / Petrol" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Image</span>
                                <input type="file" style={{ padding: 4 }} required="" />
                            </div>
                        </div>

                        <div className="button">
                            <input type="submit" defaultValue="Register" />
                        </div>
                    </form>
                </div>
            </div>
            </div>

        </>
    )
}