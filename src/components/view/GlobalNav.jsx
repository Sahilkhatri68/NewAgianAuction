import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import yashti from "../img/bgremovelogo.png";
export default function GlobalNav() {
    return (
        <>
            <div className="naavaa">
                <input type="checkbox" id="naavaa-check" />
                <div className="naavaa-header">
                    <div className="naavaa-title">
                        <Link to="/"  > <img src={yashti} className="mianlogoo"></img></Link>
                    </div>
                </div>
                <div className="naavaa-btn">
                    <label htmlFor="naavaa-check">
                        <span />
                        <span />
                        <span />
                    </label>
                </div>

                <div className="naavaa-links">
                    <Link to="/stafflogin" >Staff</Link>
                    <div className="drdwn">
                        <button className="dropbtn">Auction's
                            <i className="fa fa-caret-down" style={{ marginLeft: 8 }}></i>
                        </button>
                        <div className="drdwn-content">
                            <Link to="/live">Live Auction</Link>
                            <Link to="/upcoming">Upcoming Auctions</Link>
                            <Link to="/bank">Bank Auctions</Link>

                        </div>
                    </div>
 
                    <Link to="/cosign"> <button className='Sbtn'>Signup</button></Link>
                    <Link to="/login"><button className='Lbtn'>Login</button></Link>
                    <Link to="/userprofile">  <FaUserCircle style={{width:25,height:25}} /></Link>
                </div>

            </div>
        </>
    )
}