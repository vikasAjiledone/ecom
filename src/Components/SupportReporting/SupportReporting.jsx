import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SupportReporting.css";

const SupportReporting = () => {
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
            <h4 className="contact_get_support">Reporting</h4>
            <p className="_get_support">Generating a Report</p>
          </div>
          <div className="getsupport_right">
            <h3 className="getSuppport_heading">Generating a Report</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">Slokart - Reporting</p>
                <p>
                  In this article, we will discuss how to manage and use
                  reporting section using the Slokart account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportReporting;
