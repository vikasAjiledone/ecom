import React from "react";
import "./support.css";
import SupportContent from "../../Components/SupportContent";

const Support = () => {
  return (
    <div className="support-section">
      <div className="support_section_bg">
        <div className="background_bg_blue">
          <h1 className="section_heading">Help and Support center</h1>
        </div>
        <div className="background_bg_white"></div>
      </div>
      <div className="support_content_up">
        <div className="support_content">
          <SupportContent />
        </div>
      </div>
    </div>
  );
};

export default Support;
