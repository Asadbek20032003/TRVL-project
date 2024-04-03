import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { Button } from "../Button";
import { NavbarItem } from "./NavbarItem";
import { useEffect } from "react";
import "./Navbar.css";


function Navbar(){
const [click,setClick] = useState(false);
const [button , setButton] = useState(true);
const [navbar ,setNavbar] = useState(false);

const handleClick = ()=> setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () =>{
    if(window.innerWidth <= 971){
        setButton(false);
    }else {
        setButton(true);
    }
};

useEffect(()=>{
    showButton();
    
} ,[]);
 
// window.addEventListener('resize', showButton);
 
const changeBackground = () =>{
  if(window.scrollY >= 80 ){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}

window.addEventListener('scroll', changeBackground);



    return (
        <>
           <nav className= {navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL  <i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                  {NavbarItem.map((item, index) =>(  
                    <li className={item.cNAME} key={index} >
                        <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
                  {button && <Button buttonStyle='btn--outline' >Sign Up</Button> }  
                  {/* <Button>Sign Up</Button> */}
            </div>
           </nav>

        </>
    )
}

export default Navbar;