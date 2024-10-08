import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ListingPresets.css";

const ListingPresets = () => {
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
            <h3 className="getSuppport_heading">Listing Presets</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to List Presets
                </p>
                <p>
                  Listing Presets can be used to easily apply customizable
                  information to your listing in Slokart. if you sell products
                  that share different listing elements, you can create and
                  apply listing presets to add comomon information to multiple
                  products. When used, listing presets can use save time and
                  effort during the listing process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPresets;
