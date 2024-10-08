import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CustomInventory.css";

const CustomInventory = () => {
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
            <h3 className="getSuppport_heading">Custom Inventory Templates</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to use Custom Inventory Templates Add-On
                </p>
                <p>
                  Custom Inventory Templates Add-On can be used to create a
                  Custom template for importing and exporting product
                  information. A Custom import Template is made so that when you
                  upload the csv file into Slokart, we are able to read the
                  file information correctly. A Custom Export Template is
                  essentially the same thing; however, this is used to export
                  product information out of Slokart.
                </p>
              </div>
            </div>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to Set up Automated Inventory Feed
                </p>
                <p>
                  Slokart uses an Automated Inventory Feed to receive quantity
                  and products upadate from your supplies to update your sales
                  channels. This feed can also be used to import your supplier's
                  catalog to create products. In order to setup an inventory
                  feed, You'll need to ensure your dropshipper is compatible to
                  Slokart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomInventory;
