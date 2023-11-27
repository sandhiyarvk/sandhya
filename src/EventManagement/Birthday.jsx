import { Typography } from "@mui/material";
import React from "react";
export default function Birthday() {
  return (
    <div>
      <center>
        <h1
          style={{
            color: "red",
            fontSize: 40,
            fontFamily: "Lucida Handwriting",
          }}
        >
          Birthday Events
        </h1>
      </center>
      <Typography variant="h5" style={{ fontSize: 30, marginLeft: "10%" }}>
        This article includes:
        <ul>
          <li>Zoom birthday party ideas for adults </li>
          <li> Online birthday celebration ideas</li>
          <li>Virtual birthday party games</li>
          <li> Online birthday games</li>
        </ul>
      </Typography>

      <ul className="names" type="none">
        <li>Themes</li>
        <li> Baby Shower</li>
        <li> Parties </li>
      </ul>
      <div className="deco">
        <img
          src="http://www.birthdaybumps.co.in/images/Homepage/Services/Birthday-Party.jpg"
          alt=""
        ></img>
        <img
          src="http://www.birthdaybumps.co.in/images/Homepage/Services/Baby-Shower.jpg"
          alt=""
        ></img>
        <img
          src="https://bing.com/th?id=OIP.tAgpmFsjZiZr-Mf5SJNnhAHaE6&pid=cdx"
          alt=""
        ></img>
      </div>
      <center>
        <img
          style={{ marginTop: "10%" }}
          src="https://teambuilding.com/wp-content/uploads/2020/09/virtual-birthday-party-bingo.png"
          alt=""
        ></img>
      </center>
    </div>
  );
}