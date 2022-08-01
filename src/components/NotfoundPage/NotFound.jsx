import React from 'react'
import nf from "../img/notfoundpage.gif"
import GlobalNav from '../view/GlobalNav'
import "./notfound.css";
export default function Notfound() {
    return (
        <>
            <GlobalNav />
            <div className="backimg">
                <div className='nfimg'> <h1>Page not found</h1>
                    <img src={nf} className="imgnotfound"></img></div>
            </div>
        </>
    )
}