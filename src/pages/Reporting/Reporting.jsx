import React from "react";
import "./Reporting.css";

const Reporting = () => {
  return (
    <div className="reporting-page">
      <h2 className="heading_reporting">Reporting</h2>
      <div className="reporting_content">
        <div className="reporting_box">
          <h3 className="reporting_box_heading">
            Cost of Goods Sold (Details)
          </h3>
          <p className="reporting_box_para">
            Determine how much your products cost so you can price them
            profitably. Set a date range and choose a specific sales channel (or
            all). Once set, generate the report to view the sales price, total
            sales, supplier price, and total cost with the cost of goods
            percentage set.
          </p>
          <p className="reporting_box_para">
            Note: For the % to calculate properly, the supplier price and total
            costs must be included. These values are pulled from your purchase
            orders using our purchase order add-on.
          </p>
          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
        <div className="reporting_box">
          <h3 className="reporting_box_heading">State Tax by Order</h3>
          <p className="reporting_box_para">
            This report will show you all your orders along with the total tax,
            discount amount, and shipping cost. You can review this data for all
            states or for a specific state.
          </p>
          <div className="view_report">
            <button className="view_report_btn" href="/reportingDetails">View Report</button>
          </div>
        </div>
      </div>
      <div className="reporting_content">
        <div className="reporting_box">
          <h3 className="reporting_box_heading">Sales Analysis</h3>
          <p className="reporting_box_para">
            Review your sales performance over the lifetime of your Slokart
            account for all sales channels. You can view the product name, the
            quantity on hand, how long since it last sold, what it sold for, and
            the best-selling marketplace. You can choose to view all sales or
            define a specific sales channel to review.
          </p>
          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
        <div className="reporting_box">
          <h3 className="reporting_box_heading">Sales Within Date Range</h3>
          <p className="reporting_box_para">
            Find out how many products you sold within a given a date range. You
            can also view the supplier, product name, and type of product (e.g.,
            kit, parent). You can choose to view all sales or define a specific
            sales channel to review. Note: For the supplier information to be
            populated, the purchase orders and supplier details will need to be
            set using our purchase order add-on. The sale volume is calculated
            by taking the quantity sold during
          </p>
          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
      </div>
      <div className="reporting_content">
        <div className="reporting_box">
          <h3 className="reporting_box_heading">Stale Inventory Sales</h3>
          <p className="reporting_box_para">
            Pinpoint what products aren’t selling. Define how far back you want
            to review the sales and the report will show you when the product
            was created in your account, the quantity on hand, and when it last
            sold.
          </p>
          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
        <div className="reporting_box">
          <h3 className="reporting_box_heading">Top Selling Items</h3>
          <p className="reporting_box_para">
            Review how many products you sold in the defined time frame with the
            average selling price, total sales, and when you last sold it. You
            can choose to view all sales or define a specific sales channel to
            review.
          </p>
          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
      </div>
      <div className="reporting_content">
        <div className="reporting_box">
          <h3 className="reporting_box_heading">Inventory - As Of Date</h3>
          <p className="reporting_box_para">
            This report is great for auditing. Define the date you want to
            review the quantity on hand and the report will show you how much
            you currently have along with the quantity you had on the defined
            date. Review the cost and valuation, as well. Note: For the
            valuation to be calculated properly, the supplier cost needs to be
            set using our purchase order add-on.
          </p>

          <div className="view_report">
            <button className="view_report_btn">View Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;
