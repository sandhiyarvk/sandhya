import * as React from "react";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 1500, height: 350, marginTop: 20, marginBottom: 30 }}
          src="https://th.bing.com/th/id/OIP.7HAYXnYrFGmkGEeibpNRHAHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            color: "crimson",
            marginLeft: "10%",
            marginTop: "10%",
            letterSpacing: "3vh",
            fontSize: 45,
          }}
        >
          EVENT MANAGEMENT SYSTEM
        </h1>
      </div>

      <Typography
        variant="h5"
        style={{
          marginLeft: "25%",
          marginRight: "20%",
          fontSize: 25,
          fontFamily: "Courier New",
        }}
      >
        Event management is the process of planning and hosting events for
        social or business purposes. Event management involves applying project
        management skills to the creation and development of events. Event
        management also requires working with staff and vendors to ensure the
        event is executed according to plan. Events can range from small-scale
        to large-scale and can include festivals, conferences, ceremonies,
        parties, concerts, or conventions.
      </Typography>

      <div style={{ display: "flex" }}>
        <img
          style={{
            width: 680,
            height: 350,
            marginTop: 30,
            marginBottom: 30,
            marginLeft: "27%",
            opacity: 0.8,
          }}
          src="https://mmo4you.net/wp-content/uploads/2022/03/mmo4you.net-forex_16.jpg"
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            color: "white",
            marginLeft: "32%",
            marginTop: "6%",
            fontSize: 40,
          }}
        >
          Event Planning Is Our Passion
        </h1>
      </div>
      <Typography
        variant="h5"
        style={{
          marginLeft: "25%",
          marginRight: "20%",
          fontSize: 25,
          fontFamily: "Courier New",
        }}
      >
        Event organizing is a skill that requires perfection, timing, and
        creativity. The website which we make for events must also reflect
        these. Since most of the event websites need to handle more traffic, the
        user interface must be designed thoughtfully. As more and more
        event-related queries are coming through online, successful event
        managers are now using websites effectively. These free event website
        templates will help you create an effective website in no time. By
        sharing frequently asked queries on the site reduces repetitive tasks.
      </Typography>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: 1500, height: 350, marginTop: 30, marginBottom: 30 }}
          src="https://th.bing.com/th?id=OIP.Sd8UakcCqiB_ktwcNmfCvwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          alt=""
        />
        <h1
          style={{
            position: "absolute",
            color: "white",
            marginLeft: "6%",
            marginTop: "10%",
            letterSpacing: "3vh",
            fontSize: 45,
          }}
        >
          Everything Starts From An Idea!
        </h1>
      </div>
      <Typography
        variant="h6"
        style={{ marginLeft: 30, marginRight: 30, fontFamily: "Courier" }}
      >
        EventsHub approaches every project with meticulous attention to detail
        and obsessive precision. Regardless of size and scope, we treat your
        event like a business with clear strategic goals, defined milestones,
        and a comprehensive plan to ensure that your event is delivered on time
        and on budget. At EventsHub, we put your organization first. We learn
        about your business, we focus on your challenges, and we plan events to
        support your goals.
      </Typography>
      <img
        style={{ marginLeft: "25%", marginTop: 30, marginBottom: 20 }}
        src="https://images.squarespace-cdn.com/content/v1/5b2bda42cc8fed2d1f0118d2/1541172884905-HEKQPJY30WNG614Y5Y63/Spark+Website_Experience+Graphic.jpg?format=1500w"
        alt=""
      />
      <hr style={{ marginLeft: "10%", marginRight: "10%" }}></hr>
      <Typography
        variant="h6"
        style={{
          marginLeft: "20%",
          marginRight: "20%",
          fontFamily: "Courier",
          color: "HotPink",
          fontWeight: 700,
          marginTop: "1%",
          marginBottom: "1%",
        }}
      >
        Working with the team at EventHub has elevated a one-day event into a
        successful two-day summit. Their expertise shines through when it comes
        to program development, speaker fulfillment, tradeshow management,
        sponsorship, marketing, and overall customer service. EventHub’s
        professionalism and leadership has transformed the planning and
        execution of our events into a seamless experience.
      </Typography>
      <hr></hr>
    </>
  );
}