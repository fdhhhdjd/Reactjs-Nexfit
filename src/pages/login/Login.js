import "./login.scss";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
        <h3>Tài Will Be With You From Dusk Till Dawn</h3>
          <h1>Login Account </h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <Link className="xin"  to="/Home"><button className="loginButton" >Sign In </button></Link>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
