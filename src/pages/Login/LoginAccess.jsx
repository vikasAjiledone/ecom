import React from "react";
// import logo from "../../assets/Logo_Slokart.png";

const LoginAccess = () => {
  return (
    <div className="firstLogin-Display"  style={{marginLeft:"0"}}>
      <div className="firstLogin-logo">
        <div>
          {/* <img src={logo} alt="" /> */}
        </div>
        <div>
          <button className="support_btn">Support</button>
        </div>
      </div>
      <div className="firstLogin_Form">
        <h3 className="firstLogin_heading">Login to your Slokart account</h3>
        <div>
          <p className="firstLogin_label">Email Address</p>
          <input type="email" placeholder="Email" className="firstLogin_input" />
          <div className="Next-button">
            <button className="next_btn">Next</button>
          </div>
        </div>
      </div>
      <div className="firstlogin-bottom">
        <span className="firstlogin-bottom-text"><a href="/">copyright © 2024</a></span>
        <span className="firstlogin-bottom-line">|</span>
        <span className="firstlogin-bottom-text"><a href="">PRIVATE POLICY</a></span>
        <span className="firstlogin-bottom-line">|</span>
        <span className="firstlogin-bottom-text"><a href="">TERMS OF SERVICE</a></span>
        <span className="firstlogin-bottom-line">|</span>
        <span className="firstlogin-bottom-text"><a href="">TERMS OF USE</a></span>
        <span className="firstlogin-bottom-line">|</span>
        <span className="firstlogin-bottom-text"><a href="">DO NOT SELL MY PERSONAL INFORMATION</a></span>
      </div>
    </div>
  );
};

export default LoginAccess;