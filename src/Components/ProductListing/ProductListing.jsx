import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductListing = () => {
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
            <h4 className="contact_get_support">Products</h4>
            <p className="_get_support">Advance Search</p>
            <p className="_get_support">Product Listings</p>
            <p className="_get_support">Setup & Management</p>
          </div>
          <div className="getsupport_right">
            <h3 className="getSuppport_heading">Product Listings</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - Advanced Inventory Search
                </p>
                <p>
                  In this article, we will walk you through how to use Advanced
                  search in your Slokart account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing