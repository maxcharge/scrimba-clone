import '../Styles/Header.css';
import React, { useState } from 'react'
import logo from'../utilities/ScrimbaLogo.svg'
import HeaderOption from '../components/HeaderOption'

function Header() {

    const [header, setheader] = useState(true);

    const changeBackground= () =>{
        if(window.scrollY>=100){
            setheader(false);
        }
        else{
            setheader(true);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className={header ? "header" : "header__scroll"} >
            
            <div className="header__left">
                <img src={logo} alt="logo"/>
            </div>
            
            <div className="header__right">
                <HeaderOption title="Go Pro!"/>
                <HeaderOption title="All Courses"/>
                <HeaderOption title="Sign In"/>
                <HeaderOption title="Sign Up"/>
            </div>
        
        </div>
    )
}

export default Header
