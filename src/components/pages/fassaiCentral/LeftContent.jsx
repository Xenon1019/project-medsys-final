import React from "react";
import Scrollspy from 'react-scrollspy';
import './LeftContent.css'

function LeftContent(props){
    return (<>
        <div className="left" id="lefty">
                <div id="activeTableContentaa">
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy items={[
                        'content-overview',
                        'content',
                        'content-needs',
                        'content-benefits',
                        'content-documents',
                        'content-process',
                        'content-validity',
                        'content-faq',
                    ]} currentClassName='content-scroll-view'>
                    <li> <a className="tabanchor" href="#overview">Overview</a></li>
                    <li> <a className="tabanchor" href="#importance">Role of FSSAI </a></li>
                    <li> <a className="tabanchor" href="#eligibility">Who Needs Central FSSAI</a></li>
                    <li> <a className="tabanchor" href="#laws">Advantages </a></li>

                    <li> <a className="tabanchor" href="#documents" s>Documents Required</a></li>

                    <li> <a className="tabanchor" href="#attachment">Process </a></li>
                    <li> <a className="tabanchor" href="#checklist">Validity & Renewal</a></li>
                    <li> <a className="tabanchor" href="#faq">FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                <button type="submit" id="contact" style={{transform: 'transalate(0, 50px)'}}><a href="#contactus"><b style={{color:'white'}}> CONTACT US </b></a></button>
            </div>
    </>);
}

export default LeftContent;