import React from "react";
import "./Accounting.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Accounting = () => {
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
            <h4 className="contact_get_support">Add-ons</h4>
            {/* <ul>
            <li></li>
          </ul> */}
            <p className="_get_support">Accounting</p>
            <p className="_get_support">Barcodes</p>
            <p className="_get_support">Custom Inventory Templates</p>
            <p className="_get_support">Fulfilled By Amazon</p>
            <p className="_get_support">Listing Presets</p>
            <p className="_get_support">Shipping</p>
            <p className="_get_support">Warehouse Feeds</p>
          </div>
          <div className="getsupport_right">
            <h3 className="getSuppport_heading">Accounting</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to Add QuickBooks Online
                </p>
                <p>
                  This article will task walk you through the process of adding
                  QuickBooks to your online store.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart- How to Exports a Sales Order to Your Accounting
                  Platform
                </p>
                <p>
                  This article will walk you through the process of exporting
                  your sales order via your accounting platform
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">Slokart- How to Add Xero</p>
                <p>
                  This article will walk you through the process of adding Xero
                  to your online store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
