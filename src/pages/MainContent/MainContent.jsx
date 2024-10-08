import React from 'react'
import './MainContent.css'
import tick from '../../assets/tick.svg'
import success from '../../assets/success.svg'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

const MainContent = () => {
  return (
    <div className='main'>
      <div className="congrats">
        <div className="congrats-top">
          <div className="tick">
            <img src={tick} />
          </div>
          <div className='complete-outer'>
            <div className="complete">
              ✔ 100% Complete
            </div>
          </div>
        </div>
        <div className="congrats-middle">
          <div>
            <h2>Congratulations!</h2>
            <p>You have completed the basic setup, however we also offer many other features that can be added on to your account if needed. Click below to check out our Add-On marketplace.</p>
          </div>
          <div>
            <img src={success} />
          </div>
        </div>
        <div className="congrats-end">
          <button id='add-btn'>Add-On Marketplace</button>
          <button id='setup-btn'>Complete setup</button>
        </div>
      </div>
      <div className="multi-parent">
        <div className="multi">
          <div className="multi-top">
            <div className="multi-top-child">
              <h2>Multichannel<br /> Listings</h2>
              <div><AiOutlineExclamationCircle style={{ fontSize: "19px" }} /></div>
            </div>
            <div>View</div>
          </div>
          <div className="multi-bottom">
            <div className="green-circle"><h2>6</h2><div>Listed Items</div></div>
            <div className="red-circle">
              <h2>10</h2><div>Unlisted Items</div>
            </div>
          </div>
        </div>
        <div className="multi">
          <div className="multi-top">
            <div className="multi-top-child">
              <h2>Multichannel<br /> Orders</h2>
              <div><AiOutlineExclamationCircle style={{ fontSize: "19px" }} /></div>
            </div>
            <div>View</div>
          </div>
          <div className="multi-bottom">
          </div>
        </div>
      </div>
      <div className="notification">
        <div className="noti-top">
          <div className="noti-top-child">
              <h2>Notification</h2>
              <div><AiOutlineExclamationCircle style={{ fontSize: "19px" }} /></div>
            </div>
            <div><IoMdSettings style={{fontSize:"25px"}} /></div>
        </div>
        <div className='noti-head'>
          <div className="low">
            <p>Low Inventory</p>
          </div>
          <div className="new" id='noti-active'>
            <p>New Order</p>
          </div>
        </div>
        <div className="noti-content">
          <h4>You do not have any New Order notifications!</h4>
          <p>View all</p>
        </div>
      </div>
    </div>
  )
}

export default MainContent