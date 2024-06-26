import React from 'react'
import "./About.css";
import {Swiper, SwiperSlide} from "swiper/react";
import  {Pagination, Navigation, Autoplay, EffectCoverflow} from "swiper/modules";


import image1 from "../../assets/slide/204.jpg";
import image2 from "../../assets/slide/203.jpg";
import image3 from "../../assets/slide/group home 2.jpg";
import image4 from "../../assets/slide/group home.jpg";

function About () {

  return (
    <div className='header-container'>
       <h1 className='header'>About Us</h1>
       <div className='paragraph-container'>
        <p className='paragraph'>Buffalo Family Kambinare is a music group from Uthiru 22 consisting of three members, nick-de-brick, mr lazy and machwani,...Main aim is to bring people together and create entertainment through our craft for a better tommorrow .BUFFA TO THE WORLD
            #nolimits
        </p>
       </div>
       <div>
       </div>
    </div>
  )
}

export default About;