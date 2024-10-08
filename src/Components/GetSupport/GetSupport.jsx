import React from "react";
import "./GetSupport.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetSupport = () => {
  return (
    <div className="support-section">
      <div className="support_section_bg">
        <div className="background_bg_blue">
          <h1 className="section_heading">Help and Support center</h1>
        </div>
        <div className="background_bg_white"></div>
      </div>
      <div className="support_content_up">
        <div className="Getsupport_content">
          <div className="getsupport_left">
            <Link to="/support">
              <span className="allitems">
                <FaArrowLeft />
                All Items
              </span>
            </Link>
            <h4 className="contact_get_support">Contact Us</h4>
            <p className="_get_support">Get support</p>
          </div>
          <div className="getsupport_right">
            <h3 className="getSuppport_heading">Get Support</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">Send Us an Email</p>
                <p>
                  If you have a problem that can't easily solve on your own,
                  send our support team an email and they'll help you solve your
                  problem as soon as possible.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">Chat Live with Us</p>
                <p>
                  Need some help from the experts? Learn how to reach out to us
                  via Chat in this article.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">Schedule a Call with Slokart</p>
                <p>
                  This article will provide details on how-to reach oour support
                  team and provide alternative solutions to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
