import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/buffalo_family-.png";
import {AiFillYoutube,AiFillShop,AiFillHome} from "react-icons/ai";
import {SiSpotify} from "react-icons/si";
import {FaTiktok} from "react-icons/fa";

const Navbar = () => {
  const {sticky, setSticky} = useState(false);

   useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    } )
  },[])
  
  return (
    <nav className={`container ${sticky ? 'dark-nav' : '' }`}>
        <a href='/'><img src={logo} className='logo'/> </a>
        <ul>
            <li><AiFillHome/><a href='page'>Home</a></li>
            <li><AiFillYoutube/><a href='https://www.youtube.com/@BuffaloFamily'>Youtube</a></li>
            <li><SiSpotify/><a href='https://open.spotify.com/user/31nnciv64lbpx3wgfmsnanwu6hbm?si=vCI3JRbyQYyknWJiO6djhw&nd=1&dlsi=3611ff4cca314d7f'>Spotify</a></li>
            <li><FaTiktok/><a href='https://www.tiktok.com/@buffalofamily'>TikTok</a></li>
        </ul>   
    </nav>
  )
}

export default Navbar