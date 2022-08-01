import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import camaro from "../img/camaro.jfif"

import "./Viewmore.css";
export default function ViewMore() {
    return (
        <>
            <div >
                <div className='rectnhead'>
                <h1 style={{textAlign:"center",textAlign:"left"}}>Recent</h1>
                </div>
            </div>
            <div className='viewmorecard' style={{marginBottom:150}}>
              
                <div className='recentcard'>  
                    <div className='recentcardImg'>
                        <img src={camaro} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Camaro</h2>
                        <Link to="/product">  <p>View More <AiOutlineArrowRight /></p></Link>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={camaro} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Camaro</h2>
                        <Link to="/product">  <p>View More <AiOutlineArrowRight /></p></Link>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={camaro} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Camaro</h2>
                        <Link to="/product">  <p>View More <AiOutlineArrowRight /></p></Link>
                    </div>
                </div>
                <div className='recentcard'>
                    <div className='recentcardImg'>
                        <img src={camaro} className="insideRecentImg"></img>
                    </div>
                    <div className="recentcardData">
                        <p style={{ color: "gray" }}>Best muscel car ever built in history</p>
                        <h2>Camaro</h2>
                        <Link to="/product">  <p>View More <AiOutlineArrowRight /></p></Link>
                    </div>
                </div>
            </div></>
    )
}