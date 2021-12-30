import React, { useState } from "react";
// import { NavLink, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [Fuck, setFuck] = useState("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
  };
  const redirect = () => {
    if (password === "123") {
      console.log("running");
      setFuck("/final");
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div className="main">
        <div className="top">
          <span>Smart</span>
          <span>Serv</span>
        </div>
        <div className="bottom">
          <form action="">
            <input
              type="text"
              placeholder="Username"
              value={email}
              className="login same"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="password same"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <input type="submit" value="Login" /> */}
            <NavLink to={Fuck}>
              {/* <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  // validate();
                  if (redirect()) {
                    console.log("working");
                    <Switch>
                      <Redirect push to="/navbar" />;
                    </Switch>;
                  }
                }}
              > */}
              <div
                className="btn"
                onClick={() => {
                  validate();
                  redirect();
                }}
              >
                Login
              </div>

              {/* </button> */}
            </NavLink>
            <a href="#login">Forgot our Password?</a>
          </form>
          {emailErr && (
            <p style={{ color: "white" }}>Your Username should be Email</p>
          )}
          {pwdError && (
            <p style={{ color: "white" }}>
              Your password should contain letters
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
