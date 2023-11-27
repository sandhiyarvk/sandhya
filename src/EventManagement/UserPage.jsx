import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Button,
} from "@mui/material";
function UserPage() {
  const [push, setPush] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    eventDate: "",
    location: "",
    state: "",
    pincode: "",
  });
  const handleInput = (e) => {
    setPush({ ...push, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^[0-9]{10}$/.test(push.phone)) {
    } else {
      alert("Invalid phone number format!");
    }
    axios
      .post("http://localhost:4000/eventshub", push)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>
        <center>WELCOME!</center>
      </h1>
      <div className="Div">
        <Card sx={{ maxWidth: 345 }}>
          <Link
            to="/wedding"
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfy3v9kiHGWvokNTHAhiSD7_n0j7m_vRTtQq0i00wlHyt4S6JSfV1PjRU5t0QhHTalh0&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontFamily={"Josefin Sans"}
                >
                  Wedding
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  fontFamily={"Josefin Sans"}
                >
                  “A successful marriage requires falling in love many times,
                  always with the same person.” - Mignon McLaughlin 1
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <Link
            to="/birthday"
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9D0MCKbSbWCO1ytOF6eGgyc_adwtiPyZXmvAvFYkP3m6pnITgswEqhebqJj8v9U1xC4&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontFamily={"Josefin Sans"}
                >
                  BirthDay
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  fontFamily={"Josefin Sans"}
                >
                  "We grow neither better nor worse as we get old, but more like
                  ourselves." -Bernard Baruch
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 375 }}>
          <Link
            to="/corporate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaf-FhEAlb2oubE8bJQQ3jr_AboareTwukg&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontFamily={"Josefin Sans"}
                >
                  Events
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  fontFamily={"Josefin Sans"}
                >
                  “Event management is the art of creating experiences that
                  leave a lasting impression.”
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <Link
            to="/fashion"
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="230"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8BqhTrE-FaH_FZmqXLelhuMY4aWp_G-uNgDfchBMFDCxWfBK_8DV7flEcscB4wg1A-8&usqp=CAU"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontFamily={"Josefin Sans"}
                >
                  Fashion
                </Typography>
                <Typography
                  variant="body2"
                  color="black"
                  fontFamily={"Josefin Sans"}
                >
                  "Fashion is not something that exists in dresses only. Fashion
                  is in the sky, in the street. Fashion has to do with ideas,
                  the way we live, what is happening." - Coco Chanel
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
      <Typography
        variant="h5"
        style={{
          fontFamily: "NSimSun ",
          fontSize: 20,
          color: "blue",
          marginLeft: "15%",
          marginRight: "15%",
          fontWeight: 700,
        }}
      >
        Some of the event organizers offer a complete package of food to
        accommodation. In such cases, the event website needs to organized well
        so that the user can easily find what they want. In these free event
        website templates, we have collected templates that give you all major
        options to create big event sites as well as small sites too. Make sure
        you check all the free event website templates mentioned in this list to
        get a better idea before starting your site.
      </Typography>
      <h1
        style={{
          fontFamily: "Lucida Console",
          fontSize: 60,
          color: "Crimson",
          marginLeft: "7%",
        }}
      >
        Convention
      </h1>
      <img
        style={{ marginLeft: "7%" }}
        src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2019/10/free-event-website-templates-1000x750.jpg"
        alt=""
      />
      <Typography
        variant="h5"
        style={{
          fontFamily: "NSimSun ",
          fontSize: 20,
          color: "blue",
          marginLeft: "15%",
          marginRight: "15%",
          fontWeight: 700,
        }}
      >
        Convention is a lively event website template. Bright colors and swift
        animations deliver an engaging user experience. The consistent color
        scheme and precisely calibrated animations will help the site owners to
        easily brand their website. Call to action buttons to buy tickets are
        given in the easily accessible spots so that the audience can buy their
        tickets no matter on which page they are on. The creator has kept the
        code script as simple as possible. Hence, the developers can easily work
        with this template, and they can integrate any tools into this template
        without any issue.
      </Typography>
      <h1
        style={{
          fontFamily: "Lucida Console",
          fontSize: 60,
          color: "Crimson",
          marginLeft: "7%",
        }}
      >
        Eventz
      </h1>
      <img
        style={{ marginLeft: "7%" }}
        src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/04/Eventz.jpg"
        alt=""
      />
      <Typography
        variant="h5"
        style={{
          fontFamily: "NSimSun ",
          fontSize: 20,
          color: "blue",
          marginLeft: "15%",
          marginRight: "15%",
          fontWeight: 700,
          marginBottom: "5%",
        }}
      >
        Digital conferences are becoming more common nowadays. Holding a digital
        conference isn’t an easy job; you have to take care of lots of technical
        stuff and have to configure them neatly into your website for a seamless
        experience. This template’s creator has designed it smartly by keeping
        all user needs & event organizer needs in mind. A neat event schedule is
        given on the homepage so that the user can free up their time when their
        favorite speakers get online. Since it is an HTML5 website template, all
        features work flawlessly from the front-end side. Plus, the clean code
        structure makes the developers’ backend work easier.
      </Typography>
      <div className="userpage">
        <form onSubmit={handleSubmit} className="form1">
          <br></br>
          <center>
            <Typography
              component="h2"
              variant="h4"
              color="white"
              letterSpacing={6}
            >
              Book Now!
            </Typography>
          </center>
          <label className="lb">Name</label>
          <input
            className="inp"
            id="Name"
            name="name"
            type="Name"
            value={push.name}
            onChange={handleInput}
            required
          />
          <label className="lb">Email Address</label>
          <input
            className="inp"
            id="email"
            name="email"
            type="email"
            value={push.email}
            onChange={handleInput}
            required
          />
          <label className="lb">State</label>
          <input
            className="inp"
            id="state"
            name="state"
            type="State"
            value={push.state}
            onChange={handleInput}
            required
          />
          <label className="lb">Event-Type:</label>
          <input
            className="inp"
            id="event"
            name="event"
            type="event"
            value={push.event}
            onChange={handleInput}
            required
          />
          <label className="lb">Phone Number</label>
          <input
            className="inp"
            type="tel"
            id="phone"
            name="phone"
            value={push.phone}
            onChange={handleInput}
            pattern="[0-9]{10}"
            required
          />

          <label className="lb">
            Event Location:
            <input
              className="inp"
              id="textarea"
              name="location"
              type="textarea"
              value={push.location}
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <label className="lb">
            Event Date:
            <input
              className="inp"
              type="date"
              name="eventDate"
              value={push.eventDate}
              onChange={handleInput}
              required
            />
          </label>
          <br />

          <center>
            <Button type="submit" className="but" style={{ color: "white" }}>
              Book
            </Button>
          </center>
        </form>
      </div>
    </div>
  );
}
export default UserPage;