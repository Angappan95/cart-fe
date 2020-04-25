import React, { Component } from 'react';

const NavBar = (props) => {
    const {onGetCount} = props
    return ( 
        <div>
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Total Item in Cart: {onGetCount()}</a>
            </nav>
        </div>
     );
}
 
export default NavBar;