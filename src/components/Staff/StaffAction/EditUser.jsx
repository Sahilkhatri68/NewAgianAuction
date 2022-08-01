import React from 'react'
import GlobalNav from '../../view/GlobalNav'
import "./addproduct.css"
export default function EditUser() {
    return (
        <>
            <GlobalNav />
            <div className='mainconn'>            <div className="conntiner">
                <div className="title">Edit User's</div>
                <div className="connttent">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">  Name</span>
                                <input type="text" placeholder="Enter name" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter email" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="text" placeholder="Enter Password" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Phone</span>
                                <input type="text" placeholder="Enter Ph.Number" required="" />
                            </div>
                            <div className="input-box">
                                <span className="details">Adhaar card</span>
                                <input type="text" placeholder="Enter adhaar card no." required="" />
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