import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import { RiAuctionLine } from 'react-icons/ri';
import "./viewauction.css"
import { BiRupee } from 'react-icons/bi';
import GlobalNav from '../../view/GlobalNav';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';

import SimpleImageSlider from "react-simple-image-slider";
import human from "../../img/sid.jfif";
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function ViewUser() {


    const { id } = useParams();
    const [user, setUser] = useState([])

    async function GetUser() {
        try {
            const response = await axios.get(`https://daupay.com/api/user`);
            setUser(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        GetUser()
    });


    return (
        <>
            <GlobalNav />
            <div className='med'>
                <div className=' insidemed'>
                    <h1 className='hedmed'><RiAuctionLine /> Viewing User's details </h1>
                </div>

            </div>
            <div className='tableclass'>
                <table>

                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Type</th>
                            <th scope="col">Visit</th>
                            <th scope="col">Edit <FiEdit /></th>
                            <th scope="col">Delete <DeleteForeverIcon /></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item) => {
                                return (
                                <tr>
                                    <td data-label="Account"><img src={human} className="imgget"></img></td>
                                    <td data-label="name"> {item.fname}</td>
                                    <td data-label="Due Date">{item.phone}</td>
                                    <td data-label="Period">{item.user_type}</td>
                                    <td data-label="Period"><Link to="/product">Link</Link></td>
                                    <td data-label="edit"><Link to="/edituser"><FiEdit style={{ color: "black", height: 20, width: 30 }} /> </Link></td>
                                    <td data-label="delete"><IconButton><DeleteForeverIcon style={{ color: "red" }} /> </IconButton></td>
                                </tr>
                                )
                            })
                        }




                    </tbody>
                </table>
            </div>

        </>
    )
}