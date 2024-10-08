import React, {useState} from "react";
import "./Account.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const MyAccount = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="my-account">
      <h2 className="heading_account">Be in control.</h2>
      <p className="account_tag">
        From here you have control over all your details within Slokart.
      </p>
      <div className="toggle_component">
        <span className="toggle_word" id={active === 0 ? "toggle" : ""} onClick={()=>setActive(0)}>Details</span>
        <span className="toggle_word" id={active === 1 ? "toggle" : ""} onClick={()=>setActive(1)}>Subscription Billing</span>
      </div>
      {active ? 
      <div className="account_details">
        <div>
          <h2 className="details_name">Durgesh Rajak</h2>
          <p className="created_acc_info">
            You have been a member since August 14th 2024
          </p>
        </div>
        <div className="imp_info">
          <div className="details_logo">
            <span className="">
              <IoIosMail className="details_logo" />
            </span>
            <span className="details_mail detail_data">
              durgesh.rajak@ajiledone.com
            </span>
          </div>
          <div className="details_logo">
            <span className="">
              <FaPhoneAlt className="details_logo" />
            </span>
            <span className="details_number detail_data">
              No mobile phone number entered
            </span>
          </div>
          <div className="details_logo">
            <span className="">
              <FaFlag className="details_logo" />
            </span>
            <span className="details_lang detail_data">English</span>
          </div>
        </div>
        <div className="details_btn">
          <button className="change_pass_btn">Change Password</button>
          <button className="edit_details_btn">Edit details</button>
        </div>
      </div>
      : 
      <div className="subscription">
        <h2>Company Billing</h2>
        <p className="subs_para">
          Number of orders for current billing cycle: 0
        </p>
        <p className="subs_para">Current Plan: Trial</p>
        <p className="subs_para">Next Bill Date:</p>
        <div>
          <button className="sign_up_acc">Sign Up Now</button>
        </div>
      </div>
      }
    </div>
  );
};

export default MyAccount;
