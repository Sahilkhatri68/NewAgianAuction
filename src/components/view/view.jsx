import React, { useState } from 'react'
import "./view.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import mustang from "../img/mustang.jpg";
import gt from "../img/gt.jpg";
import gt1 from "../img/gt1.jpg";
import mti from "../img/mti.jpg";
import { BiRupee } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

import { TbCalendarEvent } from 'react-icons/tb';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import SimpleImageSlider from "react-simple-image-slider";
import NavView from './NavView';
import axios from 'axios';
import GlobalNav from './GlobalNav';
// slider


export default function View() {
    const images = [
        { url: "https://www.hdcarwallpapers.com/walls/ford_mustang_gt_fastback_2018_4k-HD.jpg" },
        { url: "https://www.hdcarwallpapers.com/walls/ford_mustang_2-HD.jpg" },
        { url: "https://wallpx.com/image/2021/04/ford-mustang-gt-cars-back-view-muscle-orange.jpg" },
        { url: "https://www.motortrend.com/uploads/sites/5/2018/06/2018-Ford-Mustang-GT-front.jpg?fit=around%7C1000:625" },
        { url: "https://www.motortrend.com/uploads/sites/5/2018/06/2018-Ford-Mustang-GT-dashboard.jpg?fit=around%7C1000:625" },
        { url: "https://mysterio.yahoo.com/mysterio/api/7D11170415D32782A801CF20B928CD449052FAD5F48C60945ABCA4D212C0D4F3/autoblog/resizefill_w1062_h597;quality_80;format_webp;cc_31536000;/https://s.blogcdn.com/slideshows/images/slides/732/241/1/S7322411/slug/l/dsc-6993-1.jpg" },
        { url: "https://mysterio.yahoo.com/mysterio/api/37513F7EF176DE294E96ED3D3E35E7165A91C156E1600A0EC15FA5ECCC69AC02/autoblog/resizefill_w1062_h597;quality_80;format_webp;cc_31536000;/https://s.blogcdn.com/slideshows/images/slides/732/241/8/S7322418/slug/l/dsc-7026-1.jpg" },
    ]

    const [brand, setBrand] = React.useState('');
    const handleChange = (event) => {
        setBrand(event.target.value);
    };

    const [model, setModel] = React.useState("")
    const handleModel = (e) => {
        setModel(e.target.value)
    }

    const [price, setPrice] = React.useState("")
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const [year, setYear] = React.useState("")
    const handleYear = (e) => {
        setYear(e.target.value)
    }

    // getting data 
    const { id } = useParams();
    const [product, setProduct] = useState([])

    async function GetUser() {
        try {
            const response = await axios.get(`https://shoppingcontent.googleapis.com/content/v2.1/{merchantId}/products/`);
            setProduct(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    React.useEffect(() => {
        GetUser()
    });



    // sending data to details view page on buttonclick
    const [details, setDetails] = useState([])
    async function Productview(id) {
        try {
            const viewdetails = await axios.get(`https://daupay.com/api/products/${id}`);
            setDetails(viewdetails.data)
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>

            <div  >

                <GlobalNav />


                <div className='mainView'>
                    <div className='leftview'>
                        <div className='leftCard'>
                            <h4 style={{ textAlign: "center", alignItems: "center" }}>Filter</h4>
                            <div className='forhide'>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small"> Brand</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={brand}
                                        label="Brand"
                                        onChange={handleChange}
                                    >

                                        <MenuItem value={10}>Bmw</MenuItem>
                                        <MenuItem value={20}>Mahindra</MenuItem>
                                        <MenuItem value={30}>Suzuki</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small"> Model</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={model}
                                        label="Model"
                                        onChange={handleModel}
                                    >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small"> Year</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={year}
                                        label="Year"
                                        onChange={handleYear}
                                    >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small"> Price</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={price}
                                        label="Price"
                                        onChange={handlePrice}
                                    >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            {/* live notification */}
                            <div className='bottomCard'>
                                <div> Live Event's <TbCalendarEvent style={{ color: "red", height: 20 }} /></div>

                            </div>
                            <div className='mediaItems'>

                            </div>
                        </div>

                    </div>

                    <div className='rightview'>
                        {/* {product.map((item) => {
                            return (
                                <div className='datadiv'  >
                                    <div>{item.productname}</div>
                                    <SimpleImageSlider
                                        width={250}

                                        height={250}
                                        images={images}
                                        showBullets={true}
                                        showNavs={true}
                                    />
                                    <div className='imgtitlee'>
                                        <div><BiRupee />{item.price}</div>
                                        <Link to={`product/${item.id}`}>     <button className='bifbtnn'>Bid now</button></Link>
                                    </div>
                                </div>

                            )
                        })} */}
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>
                        <div className='datadiv'  >
                          
                            <SimpleImageSlider
                                width={250}

                                height={250}
                                images={images}
                                showBullets={true}
                                showNavs={true}
                            />
                            <div className='imgtitlee'>
                                <div><BiRupee /> 45000</div>
                                <Link to={"/product"}>     <button className='bifbtnn'>Bid now</button></Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}