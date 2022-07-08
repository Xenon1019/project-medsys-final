import React from "react";

import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';
import './Header.css';

function Header(){
    return (<>
        <div className="application" style={
                {display:'flex',
                marginTop: '0rem',
            }}>
            <div className="header-left-content">
                <h1>Central FSSAI License</h1> <br />
                <p>The authority issue the Food License to that business who is engaged in activities involving food or related
                    products for human consumption and
                    lays down the rules & regulations which has to be adhered to by Food Business Operators in India.</p><br />

                <br />
                <ul>
                    <li> <img src={businessLogo} alt="" /> <b>Business Served</b></li>
                    <li> <img src={starLogo} alt="" /> <b>9.6/10 Unfiltered Customer ratings</b></li>
                    <li> <img src={smileLogo} alt="" /> <b>Satisfaction or Money Back Guarntee</b></li>
                </ul>
            </div>

            <div className="header-right-content">
                <form action="">
                    <input type="text" name="" placeholder="Full Name" required /> <br />
                    <input type="email" name="" placeholder="Email ID" required /> <br />
                    <input type="tel" name="" placeholder="Phone No." required /> <br />
                    <button type="submit"> <a href="/">Request a Callback</a></button>
                </form>
            </div>
        </div>

        <div className="top-footer">
            <p>Get in touch with us acquire various licenses, registrations, and certifications</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>
    </>);

}

export default Header;