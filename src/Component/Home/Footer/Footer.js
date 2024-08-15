import React from 'react';
import "./Footer.css";
// import {Facbook } from "@heroicons/react/24/outline";
import { Facebook, Instagram, Pinterest, X, Twitter } from '@mui/icons-material';


function Footer() {
    return (
        <div className='foot-box'>
            <div className="cont">
                <p className="cont-p">685 Market Street <br />
                    San Francisco, CA 94105, <br />
                    United States
                </p>

                <p className="cont-p">Call us: <span className="cont-span">(091)-123-ELLA</span> <br />
                    Email: <span className="cont-span">email@domain.com</span>
                </p>

                <br />
                <div className="foot-icon">
                    <Facebook color="black" className='foot-i' />
                    <Instagram color="black" className='foot-i' />
                    <Pinterest color="black" className='foot-i' />
                    <Twitter color="black" className='foot-i' />
                    <X color="black" className='foot-i' />
                </div>
            </div>

            <div className="rect">
                <h1 className='foot-h1'>Shop</h1>

                <ul>
                    <li><a href="#" className='foot-a'>New In</a></li>
                    <li><a href="#" className='foot-a'>Living Room</a></li>
                    <li><a href="#" className='foot-a'>Dining Room</a></li>
                    <li><a href="#" className='foot-a'>Bedroom</a></li>
                    <li><a href="#" className='foot-a'>Home Office</a></li>
                    <li><a href="#" className='foot-a'>Outdoor</a></li>
                    <li><a href="#" className='foot-a'>Decor</a></li>
                    <li><a href="#" className='foot-a'>Lookbook</a></li>
                </ul>
            </div>

            <div className="rect">
                <h1 className='foot-h1'>Further Info</h1>

                <ul>
                    <li><a href="#" className='foot-a'>About</a></li>
                    <li><a href="#" className='foot-a'>Customer Service</a></li>
                    <li><a href="#" className='foot-a'>Terms & Conditions</a></li>

                </ul>
            </div>

            <div className="rect">
                <h1 className='foot-h1'>Customer Service</h1>

                <ul>
                    <li><a href="#" className='foot-a'>Search Terms</a></li>
                    <li><a href="#" className='foot-a'>Contact Us</a></li>
                    <li><a href="#" className='foot-a'>Store Locations</a></li>
                    <li><a href="#" className='foot-a'>Orders And Returns</a></li>
                    <li><a href="#" className='foot-a'>Advanced Search</a></li>
                    
                </ul>
            </div>

            {/* <div className="big-rect">
                <h1 className='foot-h1'>Newsletter Sign Up</h1>
                <p className="foot-p2">Receive our latest updates about our products & promotions.</p>

            </div> */}

        </div>
    );
}

export default Footer;