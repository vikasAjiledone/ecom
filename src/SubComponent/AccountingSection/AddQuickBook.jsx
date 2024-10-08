import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AccountsectionStyle.css";

const AddQuickBook = () => {
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
            <Link to="#">
              <span className="allitems">
                <FaArrowLeft />
                Add-ons
              </span>
            </Link>
            <h4 className="contact_get_support">Accounting</h4>
            <p className="_get_support">
              Slokart-How to Add QuickBooks Online
            </p>
            <p className="_get_support">
              Slokart-How to Export a Sales Order to Your Accounting Platform
            </p>
            <p className="_get_support">Slokart - How to Add Xero</p>
          </div>
          <div className="getsupport_right">
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to Add QuickBooks Online
                </p>
                <p>
                  This article will walk you through the process of adding
                  QuickBooks to your online store.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Follow the steps below to add QuickBooks Online to your online
                  store:
                </p>
                <div className="">
                  <p>1.On the side navigation menu, select Settings.</p>
                  <p className="getsupport_info">
                    No worries, we are here to help!
                  </p>
                  <img
                    src="https://content.bluehost.com/bluehost/img/bluehost/ecomdash/dashboard-settings.jpg"
                    className="img_account"
                    alt=""
                  />
                </div>
              </div>
              <p className="getsupport_info">Chat With Us Now</p>
              <div className="getsupport_info_body">
                <p>
                  Be sure to have your Account Billing Information (preferably,
                  your email address and/or custom domain name) handy.
                </p>
              </div>
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

export default AddQuickBook;
