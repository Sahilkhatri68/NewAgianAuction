import React from 'react'
import "./Cosign.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import GlobalNav from '../view/GlobalNav';
import { Link } from 'react-router-dom';
 
export default function Cosign() {
    return (
        <>
        <GlobalNav/>
            <div className='outermainn'>

                <div className='outersecodnmain'>
                    <div className='impcont'>
                        <div className='insideconpnt'>
                            <p className='insideparacont'> Create Account</p>
                            <div className='colordiv'>

                            </div>
                        </div>
                        <div className='insideseccomp'>
                            <p className='memcomp'></p> Choose Membership
                            <div className='colordivfalse'>

                            </div>
                        </div>
                    </div>
                    <div className='botmmaincont'>
                        <div className='botmcontdata'>
                            <div className='headbtmdata'>
                                Create a Yashti Automobile Account
                            </div>
                            <div className='inputdatadiv'>
                                <div>
                                    <TextField id="outlined-basic" className='inputmui' label="Name" variant="outlined" size="small" />
                                    <p className='outpara'>Please enter your name exactly as it is listed on your photo ID  </p>
                                </div>
                                <div className='inpdatacontain'>
                                    <TextField id="outlined-basic" className='inputmui' label="Email" variant="outlined" size="small" />
                                </div>
                                <div className='inpdatacontain'>
                                    <TextField id="outlined-basic" className='inputmui' label="Password" variant="outlined" size="small" />
                                </div>
                                <div className='inpdatacontain'>
                                    <TextField id="outlined-basic" className='inputmui' label="Confirm-Password" variant="outlined" size="small" />
                                </div>

                                <div className='btncheckdiv'>
                                    <div className='chkbtnn'>
                                        <Checkbox />
                                    </div>
                                        <div className='parachek'>By clicking this box, I agree that I am at least 18 years of age and that I have read and agreed to the YashtiAutomobiles Member Terms and Conditions, Website Terms of Service, and Privacy Policy. *
                                        </div>
                                </div>
                                <div className='Submtbtn'>
                               <Link to="/coplan"><button className='btnsgup'>Submit</button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}