import React from 'react'
import "./bottom.css"
import person from "../img/aki.jpg"

export default function Bottom() {
    return (
        <>
                            
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3 className='yashtiheadbotom'>
                            Yashti Automobile
                        </h3>
                        <p className='yashtiparabtm'>India</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3 className='yashtiheadbotom' >
                            Yashti Automobile
                        </h3>
                        <p className='yashtiparabtm'>India</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
            <div className='bottomcomp'>
                <div className='leftbottomcomp'>
                    <div className='textdiv'>
                        <h3 className='yashtiheadbotom'>
                            Yashti Automobile
                        </h3>
                        <p className='yashtiparabtm'>India</p>
                    </div>
                </div>
                <div className='rightbottomcomp'>
                    <img src={person} className="rightimgbottom"></img>
                </div>
            </div>
        </>
    )
}