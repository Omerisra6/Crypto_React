import React from 'react'

export default function Header() {
    return (
        <div className="header">

            <div className="logo">localtrade</div>
            <div className="header-links-container">
                <div className="buy-crypto-container header-button">
                    <div>Buy</div> 
                    <span className="material-icons icon-sm drop-down">arrow_drop_down</span>
                </div>
                <div className="finance-container header-button">
                    <div>Finance</div> 
                    <span className="material-icons icon-sm drop-down">arrow_drop_down</span>
                </div>
                <div className="header-button">Listing</div>
                <div className="header-button">Academy</div>
                <div className="header-button">About Us</div>
            </div>
            

            <div className="top-right"> 
                <div className="header-actions-container">
                    <div className="header-action">ENG</div>
                    <div className="header-action">USD</div>
                    <div className="header-action">SIGN UP</div>
                </div>
                <div className="log-in">LOG IN</div>

            </div>
            
        </div>
    )
}
