import React, { useState } from 'react'

import GlobalNav from '../../view/GlobalNav'
import axios from 'axios';
import "./addproduct.css"
export default function AddProducts() {

    const [productname, setProductname] = useState("");
    const [makingyear, setMakingyear] = useState("");
    const [brand, setBrand] = useState("");
    const [driven, setDriven] = useState("");
    const [transmission, setTransmission] = useState("");
    const [exidental, setExidental] = useState("");
    const [fuel, setFuel] = useState("");
    const [insurance, setInsurance] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    function postdata() {
        console.log("Test")
        axios
            .post("https://daupay.com/api/products", {

                productname: productname,
                makingyear: makingyear,
                brand: brand,
                driven: driven,
                transmission: transmission,
                exidental: exidental,
                fuel: fuel,
                insurance: insurance,
                price: price,
                image:image,
            })
            .then((response) => {

                console.log(response.data)
            });
    }
    return (
        <>



            <GlobalNav />
            <div className='mainconn'>
                <div className="conntiner">
                    <div className="title">Add Product's </div>
                    <div className="connttent">
                        <div  >
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Product Name</span>
                                    <input type="text" placeholder="Enter Product name" required="" onChange={(e) => setProductname(e.target.value)} name={productname} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Making Year</span>
                                    <input type="text" placeholder="Enter Manufacturing date" required="" onChange={(e) => setMakingyear(e.target.value)} name={makingyear} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Brand</span>
                                    <input type="text" placeholder="Enter Brand" required="" onChange={(e) => setBrand(e.target.value)} name={brand} />
                                </div>

                                <div className="input-box">
                                    <span className="details">Driven</span>
                                    <input type="text" placeholder="Enter Driven Km" required="" onChange={(e) => setDriven(e.target.value)} name={driven} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Transmission</span>
                                    <input
                                        type="text"
                                        placeholder="Auto/Mannual"
                                        required=""
                                        onChange={(e) => setTransmission(e.target.value)} name={transmission}
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">Accidental</span>
                                    <input type="text" placeholder="Yes/No" required=""
                                        onChange={(e) => setExidental(e.target.value)} name={exidental} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Fuel</span>
                                    <input type="text" placeholder="Diesel / Petrol" required="" onChange={(e) => setFuel(e.target.value)} name={fuel} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Insurance</span>
                                    <input type="text" placeholder="Yes/No" required="" onChange={(e) => setInsurance(e.target.value)} name={insurance} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Price</span>
                                    <input type="text" placeholder="Yes/No" required="" onChange={(e) => setPrice(e.target.value)} name={price} />
                                </div>
                                <div className="input-box">
                                    <span className="details">Image</span>
                                    <input type="text" placeholder="Yes/No" required="" onChange={(e) => setImage(e.target.value)} name={image} />
                                </div>
                                {/* <div className="input-box">
                                    <span className="details">Image</span>
                                    <input type="file" style={{ padding: 4 }} required="" />
                                </div> */}
                            </div>

                            <div className="button" >
                                <button defaultValue="Register" className='onpostdatabtn' onClick={()=>postdata()}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}