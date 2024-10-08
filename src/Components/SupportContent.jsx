import React from "react";
import "./SupportContent.css";
import { Link } from "react-router-dom";

const SupportContent = () => {
  return (
    <div className="support_content">
      <div className="support_search_center">
      </div>
      <div className="support_all_content">
        <div className="support_management_content">
          <div className="support_card_content">
            <div className="contact_us support_card">
              <h4 className="support_heading_card">Contact Us</h4>
              <li>
                <Link to="/getsupport" className="support_label">
                  Get Support
                </Link>
              </li>
            </div>
            <div className="Add_ons_content support_card">
              <h4 className="support_heading_card">Add-Ons</h4>
              <li>
                <Link to="/accounting" className="support_label">
                  Accounting
                </Link>
              </li>
              <li>
                <Link to="#" className="support_label">
                  Barcodes
                </Link>
              </li>
              <li>
                <Link to="#" className="support_label">
                  and 6 more...
                </Link>
              </li>
            </div>
            <div className="integrations_content support_card">
              <h4 className="support_heading_card">Integrations</h4>
              <li>
                <Link to="/integrationsales" className="support_label">
                  Sales Channels
                </Link>
              </li>
            </div>
          </div>
          <div className="support_card_content">
            <div className="products_content support_card">
              <h4 className="support_heading_card">Products</h4>
              <li>
                <Link to="/advancesearch" className="support_label">
                  Advance Search
                </Link>
              </li>
              <li>
                <Link to="/productlisting" className="support_label">
                  Product Listings
                </Link>
              </li>
              <li>
                <Link to="/setupManagement" className="support_label">
                  Setup & Management
                </Link>
              </li>
            </div>
            <div className="reporting_content_support support_card">
              <h4 className="support_heading_card">Reporting</h4>
              <li>
                <Link to="/supportreporting" className="support_label">
                  Generating a Report
                </Link>
              </li>
            </div>
            <div className="sales_content_support support_card">
              <h4 className="support_heading_card">Sales</h4>
              <li>
                <Link to="/salesorder" className="support_label">
                  Orders
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
