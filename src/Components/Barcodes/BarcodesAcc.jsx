import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Barcodes.css";

const BarcodesAcc = () => {
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
            <h3 className="getSuppport_heading">Barcodes</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">Slokart - Barcodes</p>
                <p>
                  A Barcode is a visual, machine-readale method of identifying
                  data. Barcodes can include data like size, color, inventory
                  counts, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodesAcc;
