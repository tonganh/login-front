import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const intialLogin = {
    username: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(intialLogin);
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  }
  useEffect(()=>{
    setLoginInfo({
      username:'',
      password:''
    })
  },[])
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={require("./images/signin-image.jpg")} alt="123" />
              </figure>
              <Link className="signup-image-link" to={
                {
                  pathname:"/register"
                }
              } >Create an account</Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign </h2>
              <form method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="your_name"
                    placeholder="Your Name"
                    value={loginInfo.username || ""}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="your_pass"
                    placeholder="Password"
                    value={loginInfo.password || ""}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember-me" className="label-agree-term">
                    Remember me
                  </label>
                </div>
                <div class="form-group form-check">
  </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
