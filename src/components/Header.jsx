import React, { Component } from "react";
import '../css/header.css'

class Header extends Component {
  render() {
    return (
        <div className='wrapper header'>
            <h1>Find Your Favourite Music Albums!</h1>
            <h3>Browse the albums by <span className=''>genre</span>, <span className=''>country</span>, 
            and <span className=''>price</span>.</h3>
        </div>
    );
  }
}

export default Header;