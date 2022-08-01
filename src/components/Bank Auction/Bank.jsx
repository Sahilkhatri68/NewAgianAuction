import React from 'react'
import { Link } from 'react-router-dom';
import { RiAuctionLine } from 'react-icons/ri';
import "./bank.css"
import { BiRupee } from 'react-icons/bi';

import yashti from "../img/yashti.jpg";
import GlobalNav from '../view/GlobalNav';
export default function Bank() {
    return (
        <>
         <GlobalNav/>

            <div className='med'>
                <div className=' insidemed'>
                    <h2 className='hedmed'><RiAuctionLine /> Bank Auction's details </h2>
                    
                </div>

            </div>
            <div className='tableclass'>
                <table>

                    <thead>
                        <tr>
                            <th scope="col">Bank</th>
                            <th scope="col">Product</th>
                            <th scope="col">Starting-Bid</th>
                            <th scope="col">Period</th>
                            <th scope="col">Visit</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Account">HDFC</td>
                            <td data-label="Due Date">Range Rover</td>
                            <td data-label="Amount"><BiRupee/>12,190</td>
                            <td data-label="Period">03/01/2022 - 03/31/2023</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account">PNB</td>
                            <td data-label="Due Date">Endavour</td>
                            <td data-label="Amount"><BiRupee/>122,190</td>
                            <td data-label="Period">03/01/2022 - 03/31/2023</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account">AXIS</td>
                            <td data-label="Due Date">Fortuner</td>
                            <td data-label="Amount"><BiRupee/>12,1290</td>
                            <td data-label="Period">03/01/2022 - 03/31/2023</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        <tr>
                            <td data-label="Account">SBI</td>
                            <td data-label="Due Date">Range Rover</td>
                            <td data-label="Amount"><BiRupee/>12,190</td>
                            <td data-label="Period">03/01/2022 - 03/31/2023</td>
                            <td data-label="Period"><a href="#">Link</a></td>
                        </tr>
                        

                    </tbody>
                </table>
            </div>

        </>
    )
}