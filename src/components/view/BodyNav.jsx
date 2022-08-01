import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import yashti from "../img/bgremovelogo.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./Bodynav.css"
export default function BodyNav() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className="Nnav"  >
                <input type="checkbox" id="Nnav-check" />
                <div className="Nnav-header">
                    <div className="Nnav-title">
                        <Link to="/"  > <img src={yashti} className="mianlogoo"></img></Link>
                    </div>
                </div>
                <div className="Nnav-btn">
                    <label htmlFor="Nnav-check">
                        <span />
                        <span />
                        <span />
                    </label>
                </div>

                <div className="Nnav-links">
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
                    <Link to="/userprofile">  <FaUserCircle style={{ width: 25, height: 25 }} /></Link>
                </div>
                <div className='maininst'>
                    <div className='instruction'>
                        <h1 className='auchead'>Join Our Next Auction! Find Your Equipment</h1>
                    </div>
                    <div className='outsideInst'>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small">Cars</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Maruti</MenuItem>
                                    <MenuItem value={20}>Honda</MenuItem>
                                    <MenuItem value={30}>Mahindra</MenuItem>
                                    <MenuItem value={40}>Nexa</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <input className='inputinst' placeholder="I'm looking for...car "></input>
                        <button className='searchinst'>Search</button>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}