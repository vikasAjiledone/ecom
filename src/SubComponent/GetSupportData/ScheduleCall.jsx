import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./GetSupportData.css";

const ScheduleCall = () => {
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
                <p className="getsupport_info">Schedule a Call with Slokart</p>
                <p>
                  This article will provide details on how-to reach our support
                  team and provide alternative solutions to assist you.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">Schedule a Call</p>
                <p>
                  If you have a problem that you can't solve on your own, you
                  can request a phone call with the Slokart support team today.
                </p>
                <p>
                  Have a question that you can’t solve using our Knowledge Base?
                  Something not working on your account how you thought it
                  would?
                </p>
                <p className="getsupport_info">
                  No worries, we are here to help!
                </p>
                <p>
                  Schedule a free 15-minute call by clicking the link below, and
                  someone from our knowledgeable support team will contact you.
                  Be sure to choose the appropriate appointment type when
                  scheduling your call.
                </p>
              </div>
              <p className="getsupport_info">Schedule a Call</p>
              <div className="getsupport_info_body">
                <p>
                  Be sure to have your Account Billing Information (preferably,
                  your email address and/or custom domain name) handy.
                </p>
              </div>
              <p>
                Are you in your 15-day trial and need assistance? Please
                schedule your free 15-minute call consultation by clicking
                here.,
              </p>
              <p>
                Are you a paying customer and need assistance with your active
                account? Please schedule your free 15-minute call consultation
                by clicking here.
              </p>
              <p>Alternatively,</p>
              <ul>
                <li>
                  Have a custom domain? Be sure to allow 24-48 hours after
                  publishing for propagation.
                </li>
                <li>
                  Changes made not visible? Clear your browser Cache & Cookies.
                </li>
                <li>
                  Always test a different computer from a different network if
                  possible.
                </li>
                <li>Reset (unplug for 30 seconds) your router.</li>
              </ul>
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

export default ScheduleCall;
