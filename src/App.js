import {useState} from 'react'
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
  const adminUser={
    email:"taiheo@gmail.com",
    password:"taideptrai"
  } 
  const [user,setUser] =useState({name:"",email:""});
  const[error,setError]=useState("")
  const Logins=details=>{
    console.log(details)
    if(details.email==adminUser.email&&details.password==adminUser.password){
      console.log("Succsess")
      setUser({
        name:details.name,
        email:details.email
      })
    }else{
      console.log('failed')
      setError('Tài khoản không đúng!!!')
    }
  }
  return (
    // <div className="app">
    //   {(user.email!="")?(
    //           <div className="welcome">
    //             <h2>Welcome,<span>{user.name}</span></h2>
    //             <button>logout</button>
    //           </div>
    //         ):(
    //           <Login Logins={Logins} error={error} />
    //         )}      
    // </div>

      <Router>
       <Redirect exact from="/" to="/login" /> 
       {/* <Route>
          {(user.email!="")?
                 <Route path="/home">
                 <Home/>
                 </Route>             
             :(
               <Login Logins={Logins} error={error} />
            )} 
           
            </Route> */}
        <Switch>
          <Route path="/login">
          {(user.email!="")?                             
                 <Redirect exact from="/login" to="/home" />                                     
             :(
               <Login Logins={Logins} error={error} />
            )} 
            </Route>
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