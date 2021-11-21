import React from 'react'

export default function Poster() {
    return (
        <div className="poster">
           

            <div className="left-poster">
                <h5 className="no-comission">0% comission</h5>
                <h2 className="join-best">Join the best cryptocurrency exchange</h2>
                <h5 className="trade-with">Trade with over 740 different cryptocurrency and flat currency pairs, including Bitcoin, Etherium and BNC exchange</h5>
                <button className="start-trading">Start Trading</button>
            </div>

            <div className="right-poster">
                <img className="back-img" src="assets/poster.jpg" />
    
            </div>
            
        </div>
    )
}
