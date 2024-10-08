import React, { useState } from "react";
// import logo from "../../assets/Logo_Slokart.png";
import ReCAPTCHA from "react-google-recaptcha";
import './Login.css'

const Mainlogin = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  return (
    <div className="main-login-form" style={{marginLeft:"0"}}>
      <div>
      
        {/* <img src={logo} alt="" /> */}
      </div>
      <div>
        <p className="main-login-form-heading">Log in to your account</p>
      </div>

      {/* <form action=""> */}
      <div className="input-field">
        <input type="email" required spellcheck="false" />
        <label>Email</label>
      </div>
      <div className="input-field">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          spellcheck="false"
        />
        <label> Password</label>
        {/* <button onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </button> */}
      </div>

      <div className="forgot_password">
        <p>
          <a href="">Forgot your password?</a>
        </p>
      </div>
      <div className="confidencial_form_btn">
        <button className="confidencial_btn">
          Do Not Sell My Personal Information
        </button>
      </div>
      <div className="Recapcha">
        <ReCAPTCHA
          sitekey="your-site-key" // Replace with your actual site key
          onChange={onChange}
        />
        {captchaValue && <p>Captcha completed successfully!</p>}
      </div>
      <div className="signin_form_btn">
        <button className="signin_btn">Sign in!</button>
      </div>
      {/* </form> */}
      <div className="forgot_password">
        <p>
          <a href="">Don't have an account? Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Mainlogin;