import React from "react";

export default function CorporateEvents() {
  return (
    <div>
      <center>
        <h2>Corporate Events</h2>
        <img
          style={{ height: "500px", marginBottom: "5%" }}
          src="https://www.inventiva.co.in/wp-content/uploads/2023/05/eventshub_evergreen_opengraph_1200x630_2x.jpg"
          alt=""
        ></img>
      </center>
      <ul
        type="none"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "15%",
          marginRight: "20%",
          fontSize: "20px",
        }}
      >
        <li>Colorful Organizing</li>
        <li>Catering Service</li>
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "15%",
          marginRight: "15%",
          marginBottom: "5%",
        }}
      >
        <img
          style={{ width: "500px", height: "200px" }}
          src="https://i.pinimg.com/originals/48/89/38/488938d6eec996de2365b072357aac16.jpg"
          alt=""
        ></img>
        <img
          style={{ width: "500px", height: "200px" }}
          src="https://revenuesandprofits.com/wp-content/uploads/2020/12/Corporate-Event-1.jpg"
          alt=""
        ></img>
      </div>
    </div>
  );
}