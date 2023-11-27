/*
import HelloWorld from "./Day2/HelloWorld";
function App(){
  return(
    <div>
      <HelloWorld/>

    </div>
  );
}
export default App;


import InlineStyle from './Day2/InlineStyle';
function App() {
  return (
    <div>
      <InlineStyle/> 
    </div>
  );
}

export default App;


import React from 'react';
import Counter from "./Day3/Counter";
function App() {
  return (
    <div className="flex space-x-4 my-4">
    <Counter />
    </div>
    );
    
  };
  export default App;
  
  
import React from 'react';
import GokuTransformation from "./Day3/GokuTransformation";
function App() {
  return (
    <div>
      <GokuTransformation />
    </div>
  );
}
export default App;


import React from 'react';
import ToggleMessage from "./Day3/ToggleMessage";
function App() {
  return (
    <div>
      <h1>Toggle Message Example</h1>
      <ToggleMessage />
    </div>
  );
}
export default App;



import React from 'react';
import FruitSurvey from "./Day4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;



import React from 'react';
import MaterialButton from './Day4/MaterialButton';
function App() {
  return (
    <div>
      <h1>React Mateirial-UI Login Example</h1>
      <MaterialButton />
    </div>
  );
}
export default App;
import React from 'react';
import Form from './Day2/Form';
const App = () => {
  return (
    <div>
      <h1>BasicForm</h1>
      <Form />
    </div>
  );
};
export default App; */

/*

import './App.css';
import { Route,Routes} from 'react-router-dom';
import Appbar from './EventManagement/Appbar';
import Home from './EventManagement/Home';
import Login from './EventManagement/Login';
import SignUp from './EventManagement/SignUp';
import Footer from './EventManagement/Footer';
function App() {
  return (
    <>
    <Appbar/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/user" element={<user/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;*/

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Appbar from "./EventManagement/Appbar";
import Home from "./EventManagement/Home";
import Login from "./EventManagement/Login";
import SignUp from "./EventManagement/SignUp";
import Footer from "./EventManagement/Footer";
import UserPage from "./EventManagement/UserPage";
import Logout from "./EventManagement/Logout";
import About from "./EventManagement/About";
import { AuthContext } from "./EventManagement/AuthContext";

import { useReducer } from "react";
import authreducer from "./EventManagement/authreducer";

function App() {
  const [user, dispatch] = useReducer(authreducer, null);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Appbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/userpage" element={<UserPage />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;