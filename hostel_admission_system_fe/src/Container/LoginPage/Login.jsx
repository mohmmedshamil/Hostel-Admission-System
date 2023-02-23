import React, { useState } from "react";
import hostelImage from "../../Assets/Images/loginImage.png";
import "./login.scss";
function Login() {
  const [signup, setSignup] = useState(false);
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={hostelImage} alt="" />
      </div>
      <div className="login-form">
        <div class="container">
          <div class="screen">
            <div class="screen__content">
              {signup ? (
                <form class="login signup">
                  <div class="login__field">
                    <i class="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      class="login__input"
                      placeholder="Email"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      class="login__input"
                      placeholder="Name"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      class="login__input"
                      placeholder="Password"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      class="login__input"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <button class="button login__submit">
                    <span class="button__text">Create Account</span>
                    <i class="button__icon fas fa-chevron-right"></i>
                  </button>
                  <p
                    className="createAccount"
                    onClick={() => setSignup(!signup)}
                  >
                    have an account ? <a>Login</a>
                  </p>
                </form>
              ) : (
                <form class="login">
                  <div class="login__field">
                    <i class="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      class="login__input"
                      placeholder="User name / Email"
                    />
                  </div>
                  <div class="login__field">
                    <i class="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      class="login__input"
                      placeholder="Password"
                    />
                  </div>
                  <button class="button login__submit">
                    <span class="button__text">Log In Now</span>
                    <i class="button__icon fas fa-chevron-right"></i>
                  </button>
                  <p
                    className="createAccount"
                    onClick={() => setSignup(!signup)}
                  >
                    don't have an account ? <a>create account</a>
                  </p>
                </form>
              )}
            </div>
            <div class="screen__background">
              <span class="screen__background__shape screen__background__shape4"></span>
              <span class="screen__background__shape screen__background__shape3"></span>
              <span class="screen__background__shape screen__background__shape2"></span>
              <span class="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
