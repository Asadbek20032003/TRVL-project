import React from "react";
import "../../App.css"
import HeroSection from "../section/HeroSection";
import Cards from "../card/Cards";
import Footer from "../footer/Footer";


export default function Home(){
    return(
        <>
       <HeroSection/>
       <Cards/>
       <Footer/>
        </>
    )
}