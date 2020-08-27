import React from "react";
//import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
function Home() {
  console.log("API IS", API);
  return (
    <Base title="Home Page">
      <div>
        <h1 className="text-white">Hi Home Page here :)</h1>
      </div>
    </Base>
  );
}

export default Home;
