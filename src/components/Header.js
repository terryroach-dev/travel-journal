import React from "react";
import earth from "../images/earth.png"

function Header() {
    return(
        <header>
            <h1 className="header-heading"><img src={earth} className="logo" />My Travel Journal</h1>
        </header>
        
    )
};

export default Header;