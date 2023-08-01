import React from "react";

function Header() {

    return (
        <div className="header-section w-100">
            <h1 className="header-text"><i><b>Hi there!,</b></i>
                <br />
                welcome to my website.</h1>
            <img id="header-image" className="header-image" src={require("../assets/images/IMG_20230731_142927-01.jpg")} alt="" />
        </div>
    )
}

export default Header;