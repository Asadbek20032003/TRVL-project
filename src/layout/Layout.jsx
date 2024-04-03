import React, {Component} from "react";
import "../components/navbar/Navbar.css"
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default class Layout extends Component{
   
    render(){
        return(
            <div>
                <Navbar  />
                <Outlet/>
            </div>
        )
    }
}