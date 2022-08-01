import React from 'react'
import "./aboutus.css"
import carauc from "../img/carauc.jpg"
import { RiAuctionLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import GlobalNav from '../view/GlobalNav';
export default function Aboutus() {
    return (
        <>
        <GlobalNav/>
            <div className='mainabout'>
                <div className='secondmain'>
                    <h1 className='abouthead'>About Us </h1>
                </div>
                <div className='bottomabout'>
                    <div className='leftbottomabout'>
                        <p>We are a global asset management and disposition company, offering customers end-to-end solutions for buying and selling used heavy equipment, trucks and other assets. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought  </p>

                        <div className='outerbotm'>
                            <div><RiAuctionLine className='iconbid' /></div>
                            <div><h2> Online Bidding</h2>
                                <div><p>The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital.</p></div>
                            </div>
                        </div>
                        <div className='outerbotm'>
                            <div><FaUsers className='iconbid' /></div>
                            <div><h2> Corporate Social Responsibility</h2>
                                <div><p>The modern world is in a continuous movement and people everywhere are looking for quick, safe means of accessing accurate information. Prompt information is vital.</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='rightbottomabout'>
                        <img src={carauc} className="carauc"></img>
                    </div>
                </div>
            </div>
        </>
    )
}