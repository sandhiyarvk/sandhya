import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    email: "",
    password: "",
    state: "",
    phone: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^[0-9]{10}$/.test(post.phone)) {
    } else {
      alert("Invalid phone number format!");
    }
    axios
      .post("http://localhost:4000/users", post)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/login");
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form">
        <br></br>
        <center>
          <Typography
            component="h2"
            variant="h4"
            color="white"
            letterSpacing={6}
          >
            REGISTER !
          </Typography>
        </center>
        <label className="lb">Name</label>
        <input
          className="inp"
          id="Name"
          name="name"
          type="Name"
          value={post.name}
          onChange={handleInput}
          required
        />
        <label className="lb">Email Address</label>
        <input
          className="inp"
          id="email"
          name="email"
          type="email"
          value={post.email}
          onChange={handleInput}
          required
        />
        <label className="lb">Password</label>
        <input
          className="inp"
          id="password"
          name="password"
          type="password"
          value={post.password}
          onChange={handleInput}
          required
        />
        <label className="lb">State</label>
        <input
          className="inp"
          id="state"
          name="state"
          type="State"
          value={post.state}
          onChange={handleInput}
          required
        />
        <label className="lb">Phone Number</label>
        <input
          className="inp"
          type="tel"
          id="phone"
          name="phone"
          value={post.phone}
          onChange={handleInput}
          pattern="[0-9]{10}"
          required
        />
        <center>
          <Button type="submit" className="but" style={{ color: "white" }}>
            Sign Up
          </Button>
        </center>
        <br></br>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Already have an account?&emsp;
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Login
          </Link>
        </Typography>
      </form>
    </div>
  );
};
export default SignUp;
// import React, { useState, useRef } from "react";
// import { Button, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// const Login = () => {
//   const { user, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate();
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get("http://localhost:4000/users");
//       const users = response.data;
//       const foundUser = users.find(
//         (user) =>
//           user.email === emailRef.current.value &&
//           user.password === passwordRef.current.value
//       );
//       dispatch({ type: "LOGIN", payload: foundUser });
//       if (foundUser) {
//         navigate("/userpage");
//       } else {
//         setError("Invalid email or password. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error fetching or comparing data:", error);
//       setError("Error while processing. Please try again.");
//     }
//   };

//   return (
//     <div className="login">
//       <Typography
//         component="h3"
//         variant="h1"
//         color="white"
//         letterSpacing={3}
//         display={"flex"}
//         justifyContent={"flex-start"}
//         justifyItems={"flex-end"}
//         className="userlogin"
//       >
//         USER LOGIN
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <p>Please login to continue</p>
//         <label>Email Address</label>
//         <input id="email" name="email" type="email" ref={emailRef} required />
//         <label>Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           ref={passwordRef}
//           required
//         />
//         <center>
//           <Button className="button" type="submit" style={{ color: "white" }}>
//             LOGIN
//           </Button>
//         </center>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <Typography paddingLeft={4}>
//           Don't have an account?&emsp;
//           <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
//             Register
//           </Link>
//         </Typography>
//       </form>
//     </div>
//   );
// };

// export default Login;

// // import React, { useState } from "react";
// // import { Button, Typography } from "@mui/material";
// // import { Link, useHistory } from "react-router-dom";
// // import { useEffect } from "react";
// // import axios from "axios";
// // import { useRef } from "react";
// // const Login = () => {
// //   const history = useHistory();
// //   const [data, setData] = useRef({
// //     email: "",
// //     password: "",
// //   });
// //   const [error, setError] = useState("");
// //   const handleInput = (e) => {
// //     setData({ ...data, [e.target.name]: e.target.value });
// //   };
// //   useEffect(() => {
// //     axios
// //       .get(" http://localhost:4000/users")
// //       .then((res) => console.log(res.data))
// //       .catch((err) => console.log(err));
// //     if (data.email === res.data.email && data.password === res.data.password) {
// //       history.push("/userpage");
// //     } else {
// //       setError("Invalid details");
// //     }
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { email, password } = data;
// //     console.log("Email:", data.email);
// //     console.log("Password:", data.password);
// //   };

// //   return (
// //     <div className="login">
// //       <form onSubmit={handleSubmit}>
// //         <center>
// //           <Typography
// //             component="h3"
// //             variant="h3"
// //             color="white"
// //             letterSpacing={3}
// //             marginTop={2}
// //           >
// //             USER LOGIN
// //           </Typography>
// //           <p>Please login to continue</p>
// //         </center>
// //         <label>Email Address</label>
// //         <input
// //           id="email"
// //           name="email"
// //           type="email"
// //           value={data.email}
// //           onChange={handleInput}
// //           required
// //         />
// //         <label>Password</label>
// //         <input
// //           id="password"
// //           label="Password"
// //           name="password"
// //           type="password"
// //           value={data.password}
// //           onChange={handleInput}
// //           required
// //         />
// //         <center>
// //           <Button className="button" type="submit" style={{ color: "white" }}>
// //             LOGIN
// //             {/* <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
// //               LOGIN
// //             </Link> */}
// //           </Button>
// //         </center>
// //         <p>Forgot password?</p>
// //         <Typography paddingLeft={4}>
// //           Don't have an account?&emsp;
// //           <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
// //             Register
// //           </Link>
// //         </Typography>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React from "react";
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { Button, Typography } from "@mui/material";
// // import axios from "axios";

// // const SignUp = () => {
// //   const navigate = useNavigate();
// //   const [post, setPost] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     state: "",
// //     phone: "",
// //   });
// //   const handleInput = (e) => {
// //     setPost({ ...post, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (/^[0-9]{10}$/.test(post.phone)) {
// //     } else {
// //       alert("Invalid phone number format!");
// //     }
// //     axios
// //       .post("http://localhost:4000/users", post)
// //       .then((response) => {
// //         console.log(response.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="signup">
// //       <form onSubmit={handleSubmit} className="form">
// //         <br></br>
// //         <center>
// //           <Typography
// //             component="h2"
// //             variant="h4"
// //             color="white"
// //             letterSpacing={6}
// //           >
// //             REGISTER !
// //           </Typography>
// //         </center>
// //         <label className="lb">Name</label>
// //         <input
// //           className="inp"
// //           id="Name"
// //           name="name"
// //           type="Name"
// //           value={post.name}
// //           onChange={handleInput}
// //           required
// //         />
// //         <label className="lb">Email Address</label>
// //         <input
// //           className="inp"
// //           id="email"
// //           name="email"
// //           type="email"
// //           value={post.email}
// //           onChange={handleInput}
// //           required
// //         />
// //         <label className="lb">Password</label>
// //         <input
// //           className="inp"
// //           id="password"
// //           name="password"
// //           type="password"
// //           value={post.password}
// //           onChange={handleInput}
// //           required
// //         />
// //         <label className="lb">State</label>
// //         <input
// //           className="inp"
// //           id="state"
// //           name="state"
// //           type="State"
// //           value={post.state}
// //           onChange={handleInput}
// //           required
// //         />
// //         <label className="lb">Phone Number</label>
// //         <input
// //           className="inp"
// //           type="tel"
// //           id="phone"
// //           name="phone"
// //           value={post.phone}
// //           onChange={handleInput}
// //           pattern="[0-9]{10}"
// //           required
// //         />
// //         <center>
// //           <Button type="submit" className="but" style={{ color: "white" }}>
// //             {/* <Navigate
// //               to="/login"
// //               style={{ textDecoration: "none", color: "black" }}
// //             > */}
// //             Sign Up
// //           </Button>
// //         </center>
// //         <br></br>
// //         <Typography
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //           }}
// //         >
// //           Already have an account?&emsp;
// //           <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
// //             Login
// //           </Link>
// //         </Typography>
// //       </form>
// //     </div>
// //   );
// // };
// // export default SignUp;