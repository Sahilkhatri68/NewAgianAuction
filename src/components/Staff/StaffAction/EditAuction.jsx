import React from 'react'
import GlobalNav from '../../view/GlobalNav'
import "./addproduct.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function EditAuction() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <GlobalNav />
            <div className='mainconn'>
                <div className="conntiner">
                    <div className="title">Edit Auction   <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Type</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={age}
                            label="Type"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Live</MenuItem>
                            <MenuItem value={20}>Bank</MenuItem>
                        </Select>
                    </FormControl> </div>
                    <div className="connttent">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Product Name</span>
                                    <input type="text" placeholder="Enter Product name" required="" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Making </span>
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
                                    <input type="file" style={{padding:4}} required="" />
                                </div>
                                <div className="input-box">
                                    <span className="details">Start Date</span>
                                    <input type="text" placeholder="00-00-0000" required="" />
                                </div>
                                <div className="input-box">
                                    <span className="details">End Date</span>
                                    <input type="text" placeholder="00-00-0000" required="" />
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