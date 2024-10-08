import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GetSupportData.css";

const SendEmail = () => {
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
                Contact Us
              </span>
            </Link>
            <h4 className="contact_get_support">Get Support</h4>
            <p className="_get_support">Send us an Email</p>
            <p className="_get_support">Chat Live with Us</p>
            <p className="_get_support">Schedule a Call with Slokart</p>
          </div>
          <div className="getsupport_right">
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
                <p className="getsupport_info">Send Us an Email</p>
                <p>
                  If you have a problem that you can't easily solve on your own,
                  send our support team an email and they'll help you solve your
                  problem as soon as possible.
                </p>
                <p>
                  Have a question that you can’t solve using our Knowledge Base?
                  Something not working on your account how you thought it
                  would?
                </p>
              </div>
              <p className="getsupport_info">
                No Worries, we are here to help!
              </p>
              <div className="getsupport_info_body">
                <p>
                  Feel free to send us an email to the email address below, and
                  someone from our knowledgeable Support Team will get back to
                  you as soon as possible with a response.
                </p>
              </div>
              <p>
                <Link to="">Email:support@Slokart.com</Link>
              </p>
              <p>Be sure to include the following information:</p>
              <ul>
                <li>Account Email Address</li>
                <li>Custom Domain Name</li>
                <li>Detailed Symptoms or Steps to Replicate</li>
                <li>Browser and Computer type you are using</li>
              </ul>
              <p>Please allow 24-48 hours for us to process your email.</p>
              <p>
                <b>Support for all accounts:</b> Our specialists are here to
                provide technical email support and account advice to all users.
                Emails are managed in the order in which they are received.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
