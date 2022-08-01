import React from 'react'
import "./member.css"
import { FaRegCheckCircle } from 'react-icons/fa';
import GlobalNav from '../view/GlobalNav';
import premium from "../img/premium.png"
import Platinum from "../img/pl.png"
export default function Membership() {
    return (
        <>
            <GlobalNav />
            <div className='lowerDiv'>
                <div>
                    <h1>Pricing</h1>
                </div>
                <div className='bottomdiv'>

                    <div className="card-wrap">
                        <div className="card-header one">
                            <img src={premium} className="premiumimg" />
                        </div>
                        <div className="card-content">
                            <h1 className="card-title">Membership</h1>
                            <p className="card-text">
                                <FaRegCheckCircle />    User can bid upto 5 lakh
                            </p>
                            <p className="card-text">
                                <FaRegCheckCircle />    Can add money to their wallet from online or bank account or credit card

                            </p>
                            <button className="card-btn one">Buy</button>
                        </div>
                    </div>
                    <div className="card-wrap">
                    <div className="card-header two">
                            <img src={Platinum} className="premiumimg" />
                        </div>
                        <div className="card-content">
                            <h1 className="card-title">Membership</h1>
                            <p className="card-text">
                                <FaRegCheckCircle />    User can bid above 5 lakh
                            </p>
                            <p className="card-text">
                                <FaRegCheckCircle />    Can add money to their wallet from online or bank account or credit card

                            </p>
                            <button className="card-btn two">Buy</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}