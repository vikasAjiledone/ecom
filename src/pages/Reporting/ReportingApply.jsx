import React from "react";
import "./Reporting.css";
import { FaArrowLeftLong } from "react-icons/fa6";

const ReportingApply = () => {
  return (
    <div className="reporting_details">
      <p className="reporting_back_btn">
      <a href="/reporting">
        <FaArrowLeftLong className="left_arrow_btn" />
        Go Back
        </a>
      </p>
      <h3 className="Reporting_Details_heading">
        Cost of Goods Sold (Details)
      </h3>
      <div className="reporting_apply_form">
        <div className="reporting_table_heading">
          <h4>Reporting Details</h4>
          <button className="apply_btn">Apply</button>
        </div>
        <div className="reporting-apply-form">
          <div className="input-field">
            <input type="Date" required spellcheck="false" />
            <label>From Date</label>
          </div>
          <div className="input-field">
            <input type="Date" required spellcheck="false" />
            <label>To Date</label>
          </div>
        </div>
        <div className="reporting-apply-form-select">
          <div className="input-field">
            <select name="" id="">
              <option value="">Amazon In</option>
            </select>
            <label>Sales Channel</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingApply;
