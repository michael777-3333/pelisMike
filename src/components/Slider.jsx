import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import img from "../../public/ramdon/2.jpeg";
import { Grid } from "@mui/material";
import { useState } from "react";
import 'animate.css';
// import { baseUrl } from "./config";

function SlickGoTo() {
  const [img, setImage]= useState(1)
  const [animate, setAnimate]= useState('animate__fadeInLeft')
  let imgCount =1
  let animation=''
  return (
    <Grid container>
    <Grid item xs={12}>
      <div style={{ position: "relative", width: "100%", height: "600px" }}>
        <ArrowCircleLeftIcon
          style={{ color: "white", fontSize: "60px", cursor: "pointer", position:"absolute",color:'grey', top: "50%", left: "20px", transform: "translateY(-50%)" }}
          onClick={() => {
           imgCount= img-1
           animation='animate__fadeInLeft'
            if (imgCount<=0) {
              imgCount=3
            }
            console.log(imgCount);
            setAnimate(animation)
            setImage(imgCount)
            

          }} // Coloca la flecha a la izquierda de la imagen
        />
        <img
        className={`animate__animated animate__fadeInRight`}
          style={{ width: "100%", height: "600px", objectFit: "cover" }} // Ajusta el estilo de la imagen según sea necesario
          src={`/cine/${img}.jpg`}
          alt=""
        />
        <ArrowCircleRightIcon
          style={{ color: "white", fontSize: "60px", cursor: "pointer", position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)" }}
          onClick={() => {
            imgCount=img+1
            animation='animate__fadeInRight'
            console.log(imgCount);
            if (imgCount>=4) {
              imgCount=1
            }
            setAnimate(animation)
            setImage(imgCount)
          }} // Coloca la flecha a la derecha de la imagen, el traslateY sirve que para cuando vaya variando el tamano de la imagen simpre lo coloque a la mitad de su altura 
        />
      </div>
    </Grid>
  </Grid>
  );
}

export default SlickGoTo;
