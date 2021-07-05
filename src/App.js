import React from 'react'
import { HomeTwoTone } from "@material-ui/icons"
import "./App.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
// import Login from "./pages/login/Login";
import Login from "./pages/login/Login"
import Url from "./components/seach/Url"
import Player from "./components/seach/player"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


const App = () => {
  return (
      <Router>
       <Redirect exact from="/" to="/login" /> 
        <Switch>
          <Route path="/login"><Login/></Route>
          <Route  path="/home">
            <Home/>
            <Watch/>
            <Register/>
          </Route>
          <Route path="/movie">
            <Player/>
          </Route>
          <Route path="/url">
            <Url/>
          </Route>
        </Switch>
      </Router>
      
      
      
      
  )
};
export default App;
 {/* <Login/>  */}
       {/* <Home/>
       <Watch/> 
       <Register/>  */}
       {/* <Url/> */}
      {/* <Player/> */}