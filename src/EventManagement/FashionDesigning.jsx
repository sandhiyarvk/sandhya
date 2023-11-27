import { Typography } from "@mui/material";
import React from "react";

export default function FasionDesigning() {
  return (
    <div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        In Hands Of Hosting the Fasionable Events!!
      </h3>
      <div>
        <img
          style={{
            marginTop: 30,
            marginBottom: 30,
            marginLeft: "27%",
            height: 350,
            width: 680,
          }}
          src="https://in.apparelresources.com/wp-content/uploads/sites/3/2021/01/Lakme-Fashion-Week-launched.jpg"
          alt=""
        ></img>
      </div>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Makes You Tension Free From Organizing
      </h3>
      <div>
        <img
          src="https://www.azernews.az/media/2022/09/03/india_010922_8.jpg"
          alt=""
        ></img>
        <br></br>
        <Typography variant="h6" style={{ fontSize: "20px" }}>
          Embassy of India organises Exclusive Fashion Show presenting “Indian
          Creativity on the Ramp” 3 September 2022 17:21 (UTC+04:00)
        </Typography>
      </div>
    </div>
  );
}