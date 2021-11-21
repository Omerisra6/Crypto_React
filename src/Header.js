import React from 'react'

export default function Header() {
    return (
        <div className="header">

            <img className="logo" src="/assets/logojpg.jpg"/>

            <div className="header-button">Buy Crypto</div>
            <div className="header-button">Finance</div>
            <div className="header-button">Listing</div>
            <div className="header-button">Academy</div>
            <div className="header-button">About Us</div>

            <div className="top-right"> 
                <div className="header-button">English</div>
                <div className="header-button">Usd</div>
                <div className="header-button">Sign Up</div>
                <div className="log-in">LOG IN</div>
            </div>
            
        </div>

    )
}
