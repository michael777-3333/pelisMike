import { Grid } from "@mui/material";
import img from '../../public/deapool.jpg'
import * as React from "react";
import 'animate.css';
function Footer(props) {
  return (
    <div style={{ backgroundColor: "black", display:'flex', justifyContent:'center'}}>

      
        <h1 style={{color:'white', fontSize:'30px'}}>{props.title}</h1>
     
            <img className="animate__animated animate__fadeIn" style={{height:'200px', width:'300px', borderRadius:'10px', objectFit: "cover"}} src={props.img} alt="" />
         
  
    </div>
  );
}

export default Footer;
