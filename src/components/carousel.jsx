import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import deapol from '../../public/ramdon/1.jpeg'

import '../../public/styles/register.css'

export default function SimpleSlider() {
   const [img, setImage]= useState('../../public/ramdon/3.jpeg')
   
      
        
   useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 4);
      const imageUrl = `/ramdon/${count}.jpeg`;
  
      setImage(imageUrl);
  
    }, 2000);

    return () => clearInterval(interval); // Limpiar el temporizador al desmontar el componente
  }, []);

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className="divclass" style={{transform: "translateY(-50%)", position: 'absolute', top:'50%',borderRadius:'10px',maxWidth:'700px',height:'100px',alignItems:'center', display:'flex'}}>
            <h1 style={{color:'white',fontSize:'60px', left:'45%'}}>YOUR FAVORITE SERIES AND MOVIES</h1>
            </div>
            
            
            <img src={img} alt="" style={{width:'100%',height:'680px'}} />
        </div>
    );
  }