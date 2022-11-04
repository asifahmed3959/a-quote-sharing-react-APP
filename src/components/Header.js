import React,  { useState } from 'react';
import '../cssdirectory/Header.css';
import {Link} from 'react-router-dom';



class Header extends React.Component{

    render() {
        return (
            <header>
                <div className="topnav">
                    <img src="../resources/logo.png" width="100" height='52.5' />
                    <a className="active" href="#home">Home</a>
                    <Link to="/" >Quotes</Link>
                    <a href="#contact">Authors</a>
                    <a href="#about">About</a>
                    <Link to="/login" >Login</Link>
                    <input type="text" placeholder="Search.."/>

                </div>
                <div>
                    <h2 class="secondheader">your favorite quotes</h2>
                </div>
            </header>
            )
    }
}


export default Header