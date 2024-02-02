import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useAuth } from "../context/AuthContext.jsx";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
function CardsStart(props) {

  function go() {
    props.goMovie({props});
  }
 
  return (
    <Box  sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}>
      <Card
      key={props.id}
        onClick={go}
        style={{ backgroundColor: "black" }}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <CardContent style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={ require(props.img).default }
              style={{ width: "100%", height: "400px", borderRadius: "10px" }}
              alt=""
            />
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: "center" }}></CardActions>
      </Card>
   
    </Box>
  );
}

export default CardsStart;
