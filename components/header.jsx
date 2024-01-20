import React from "react";
import './header.css'
export default function Header() {

    return (
        <div className="header">
            <div className="header-title">
                <img className="header-img" width="40px" src="/images/troll-face.png"  alt="Problem?"></img>
                <h2>Meme Generator</h2>
            </div>
            
            <p>React Practice</p>
        </div>
    )
}