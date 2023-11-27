import React from "react";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
export default function Wedding() {
  return (
    <div>
      <div className="Div">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://th.bing.com/th?id=OIP.Imd49N3T8ZzY4_DU66gaRgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                De Grandeur Hotel And Banquets,Chennai
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
                display="flex"
                justifyContent={"flex-start"}
              >
                RS.800 per plate<br></br>
                150-1000 capacity
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://th.bing.com/th/id/OIP.ykk1YIBg4X4i8J2HXLu45gHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                Vivette Banquet,Coimbatore
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
                display="flex"
                justifyContent={"flex-start"}
              >
                RS.1200 per plate<br></br>
                100-1000 capacity
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 375 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://th.bing.com/th/id/OIP.K6Dr8vNxeQLiQfAEk_yTxAHaDW?w=350&h=158&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                RG Banquet,Tirupur
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
                display="flex"
                justifyContent={"flex-start"}
              >
                RS.799 per plate<br></br>
                150-1100 capacity
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="230"
              image="https://th.bing.com/th/id/OIP.L2jyK4DQdHWdZ6l7Z3_iPgHaGL?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontFamily={"Josefin Sans"}>
                Fashion Hall,Tiruchi
              </Typography>
              <Typography
                variant="body2"
                color="black"
                fontFamily={"Josefin Sans"}
                display="flex"
                justifyContent={"flex-start"}
              >
                RS.900 per plate<br></br>
                100-1000 capacity
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <ul className="names" type="none">
        <li>Photographs</li>
        <li> Makeup</li>
        <li> Mehendi Artists </li>
        <li> Decorations </li>
      </ul>
      <div className="decor">
        <img
          src="https://th.bing.com/th/id/OIP.s1EfmGAvYgbaGk71niPqaQHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.0mZcRbIfHHkptcDpqrJLcwHaGR?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.I_1KvF21cvyulAvw3a_POQHaFV?w=266&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.gBB2cZPdv_MJJo37UGGa1QHaEK?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
      </div>
      <h2 style={{ marginLeft: "10%" }}>Wedding photos</h2>
      <div className="decora" style={{ marginBottom: "5%" }}>
        <img
          src="https://th.bing.com/th/id/OIP.XMwTnuban1ZnHUNobaC-qAHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.1sPdL-tNg6LlRtFebbJ_oAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.2_8G0j59xop08B1i8tVWVAHaFU?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
        <img
          src="https://th.bing.com/th/id/OIP.Ty6_SMWZxBTcpigPhZrLWwHaJH?w=202&h=249&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        ></img>
      </div>
    </div>
  );
}