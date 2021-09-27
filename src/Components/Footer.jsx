import React from 'react';

const footerStyle = {
    height: 60,
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    background: "#363535",
    color: "#fccf58",
};

function Footer() {
    return (
        <div style={footerStyle}>
            <span>© 2021 - ALL right reserved to UIX</span>
        </div>
    )
}

export default Footer;
