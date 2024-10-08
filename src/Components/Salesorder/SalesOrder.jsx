import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import './SalesOrder.css'

const SalesOrder = () => {
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
            <h4 className="contact_get_support">Sales</h4>
            <p className="_get_support">Orders</p>
          </div>
          <div className="getsupport_right">
            <h3 className="getSuppport_heading">Orders</h3>
            <div className="getsupport_body">
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart - How to integrate Your Google Merchant Account{" "}
                </p>
                <p>
                  Integrating your Google Merchant Account will allow Slokart
                  to import your sales orders. You can also choose to list new
                  products and updates products listings.
                </p>
              </div>
              <div className="getsupport_info_body">
                <p className="getsupport_info">
                  Slokart- How to Integrate your Storefronts
                </p>
                <p>
                  In this articles, We will discuss how to add your Storefronts
                  to set up your Slokart account.
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
  )
}

export default SalesOrder