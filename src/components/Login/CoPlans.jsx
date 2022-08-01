import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import GlobalNav from '../view/GlobalNav';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FiUserCheck } from 'react-icons/fi';
import { GiCheckMark } from 'react-icons/gi';
import { BiRupee } from 'react-icons/bi';
import paytm from "../img/paytm.png"
import googlepay from "../img/googlepay.png"
import card from "../img/card.png"
import picons from "../img/picons.svg"
import "./Coplan.css"
export default function CoPlans() {
    const [card, setCard] = React.useState('');

    const handleChange = (event) => {
        setCard(event.target.value);
    };


    // month
    const [month, setMonth] = React.useState('');

    const handleMonth = (event) => {
        setMonth(event.target.value);
    };

    // year
    const [year, setYear] = React.useState('');

    const handleYear = (event) => {
        setYear(event.target.value);
    };
    return (
        <>
            <GlobalNav />
            <div className='outermainn'>

                <div className='outersecodnmain'>
                    <div className='impcont'>
                        <div className='insideconpnt'>
                            <p className='insideparaconttow'> Create Account</p>
                            <div className='colordivmem'>

                            </div>
                        </div>
                        <div className='insideseccompMem'>
                            <p className='memcomptwo'>Choose Membership</p>
                            <div className='colordivfalseagain'>

                            </div>
                        </div>
                    </div>
                    <div className='botmmaincont'>
                        <div className='botmcontdataagain'>
                            <div className='memusercheck'>
                                <div className='leftconthead'><FiUserCheck className='reacticonusericon' /></div>
                                <div className='rightparachekc'>
                                    <p className='paratag'>You're almost there. You’ve started your account, but please select a membership for full access</p>
                                </div>
                            </div>
                        </div>
                        <div className='minhead'>
                            <div>Choose Your Membership</div>
                        </div>
                        <div className='carditemmem'>
                            <div className='cardonemem'>
                                <div className='headdivmem'>
                                    Premium
                                </div>
                                <div className='cardparamem'>
                                    For those who plan to buy only a few vehicles
                                </div>
                                <div className='facitem'>Facilities</div>
                                <div className='facidescitem'>
                                    <GiCheckMark className='GiCheckMark' />
                                    <div className='bidpara'> User can bid upto 5 lakh</div>
                                </div>
                                <div className='facidescitem'>
                                    <GiCheckMark className='GiCheckMark' />
                                    <div className='bidpara'> Can add money to their wallet from online or bank account or credit card</div>
                                </div>


                            </div>
                            <div className='cardonememdiff'>
                                <div className='headdivmem'>
                                    Platinum
                                </div>
                                <div className='cardparamem'>
                                    For those who plan to buy multiple vehicles
                                </div>
                                <div className='facitem'>Facilities</div>
                                <div className='facidescitem'>
                                    <GiCheckMark className='GiCheckMark' />
                                    <div className='bidpara'> User can bid above 5 lakh</div>
                                </div>
                                <div className='facidescitem'>
                                    <GiCheckMark className='GiCheckMark' />
                                    <div className='bidpara'> Can add money to their wallet from online or bank account or credit card</div>
                                </div>


                            </div>
                        </div>
                        <div className='medlowcont'>
                            <div>
                                <div className='paymethdiv'>Please select your payment method</div>
                            </div>
                            <div className='pmethod'>
                                <div className='moneytr'>
                                    <img src={paytm} alt="paytm" className='payementmethlogo'></img>
                                </div>
                                <div className='moneytr'>
                                    <img src={googlepay} alt="paytm" className='payementmethlogo'></img>
                                </div>
                                <div className='moneytr'>
                                    <img src={card} alt="paytm" className='payementmethlogo'></img>
                                </div>
                            </div>
                        </div>
                        <div className='carddetailsdiv'>
                            <div>
                                <TextField id="outlined-basic" label="Name on card" variant="outlined" size="small" className='cardinp' />
                            </div>
                            <div className='cddetdiv'>
                                <div className='leftinfocard'>
                                    <FormControl sx={{ minWidth: 120, }} size="small">
                                        <InputLabel id="demo-select-small">Card Type</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={card}
                                            label="Card Type"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Credit</MenuItem>
                                            <MenuItem value={20}>Debit</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Card Number" variant="outlined" size="small" />
                                </div>
                                <div className='plogoincon'>
                                    <img src={picons} className='payementmethlogo'></img>
                                </div>
                            </div>
                            <div className='lowermoneyitem'>
                                <div>
                                    <FormControl sx={{ minWidth: 120, }} size="small">
                                        <InputLabel id="demo-select-small">MM</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={month}
                                            label="MM"
                                            onChange={handleMonth}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>1</MenuItem>
                                            <MenuItem value={20}>2</MenuItem>
                                            <MenuItem value={30}>3</MenuItem>
                                            <MenuItem value={40}>4</MenuItem>
                                            <MenuItem value={50}>5</MenuItem>
                                            <MenuItem value={60}>6</MenuItem>
                                            <MenuItem value={70}>7</MenuItem>
                                            <MenuItem value={80}>8</MenuItem>
                                            <MenuItem value={90}>9</MenuItem>
                                            <MenuItem value={100}>10</MenuItem>
                                            <MenuItem value={110}>11</MenuItem>
                                            <MenuItem value={120}>12</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl sx={{ minWidth: 120, }} size="small">
                                        <InputLabel id="demo-select-small">YY</InputLabel>
                                        <Select
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={month}
                                            label="YY"
                                            onChange={handleMonth}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>1</MenuItem>
                                            <MenuItem value={20}>2</MenuItem>
                                            <MenuItem value={30}>3</MenuItem>
                                            <MenuItem value={40}>4</MenuItem>
                                            <MenuItem value={50}>5</MenuItem>
                                            <MenuItem value={60}>6</MenuItem>
                                            <MenuItem value={70}>7</MenuItem>
                                            <MenuItem value={80}>8</MenuItem>
                                            <MenuItem value={90}>9</MenuItem>
                                            <MenuItem value={100}>10</MenuItem>
                                            <MenuItem value={110}>11</MenuItem>
                                            <MenuItem value={120}>12</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="CVV" variant="outlined" size="small" />
                                </div>
                            </div>
                            <div className='billindiv'>
                                <div className='billinghead'>
                                    Billing Address
                                </div>
                                <div>
                                    <div className='adddivinfo' >
                                        <TextField id="outlined-basic" label="Address" variant="outlined" size="small" className='maintextdiv' />
                                    </div>
                                    <div className='adddivinfo'>
                                        <TextField id="outlined-basic" label="City" variant="outlined" size="small" className='maintextdiv' />
                                    </div>
                                    <div className='adddivinfo'>
                                        <TextField id="outlined-basic" label="State" variant="outlined" size="small" className='maintextdiv' />
                                    </div>
                                    <div className='adddivinfo'>
                                        <TextField id="outlined-basic" label="Postal Code" variant="outlined" size="small" className='maintextdiv' />
                                    </div>
                                </div>
                            </div>
                            <div className="ordersummarydiv">
                                <div className='sumord'>
                                    <div className='reviediv'>
                                        Order Review
                                    </div>
                                    <div>
                                        <div className='memship'>Basic Membership
                                            12 Months recurring
                                        </div>
                                        <div></div>
                                    </div>

                                </div>
                                <div className='tpricediv'>
                                    <div className='totalpricediv'>
                                        Total:
                                    </div>
                                    <div className='priceamount'>
                                        <BiRupee/>12000
                                    </div>
                                </div>
                            </div>
                            <div className='btnpaydiv'>
                                <div>
                                    <button className='btnorderdiv'>Submit Payement</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}