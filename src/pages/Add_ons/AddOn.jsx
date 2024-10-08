import React, {useState} from "react";
import "./AddOns.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { HiDotsVertical } from "react-icons/hi";
import { MdHeight } from "react-icons/md";
import popupBg from '../../images/popup background.png'

const popupContentStyle = {
  // padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  height: "30rem",
};

const AddOn = () => {
  const [active, setActive] = useState()
  
  return (
    <div className="add-on">
      <h2 className="add_ons_heading">Add-Ons</h2>
      <div className="addOnCard">
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots">
                <HiDotsVertical />
              </div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <Popup
                trigger={
                  <button className="learn_more_add_ons">Learn More</button>
                }
                modal
              >
                {(close) => (
                  <div style={popupContentStyle}>
                    <div className="popup_head">
                      <p className="popup-heading">Barcode</p>
                      <button className="button_popup" onClick={close}>
                        X
                      </button>
                    </div>
                    
                    {/* <div className="popup_body">
                      Print barcodes for your products that can be used for
                      labeling and scanning your products.
                    </div> */}
                    <div className="popup_bg">
                      <img src={popupBg} alt="" />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots">
                <HiDotsVertical />
              </div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <Popup
                trigger={
                  <button className="learn_more_add_ons">Learn More</button>
                }
                position="right center"
              >
                <div>Popup content here !!</div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
      <div className="addOnCard">
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots"></div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <button className="learn_more_add_ons">Learn More</button>
            </div>
          </div>
        </div>
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots"></div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <Popup
                trigger={
                  <button className="learn_more_add_ons">Learn More</button>
                }
                position="right center"
              >
                <div>Popup content here !!</div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
      <div className="addOnCard">
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots">:</div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <button className="learn_more_add_ons">Learn More</button>
            </div>
          </div>
        </div>
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots"></div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <Popup
                trigger={
                  <button className="learn_more_add_ons">Learn More</button>
                }
                position="right center"
              >
                <div>Popup content here !!</div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
      <div className="addOnCard">
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots"></div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <button className="learn_more_add_ons">Learn More</button>
            </div>
          </div>
        </div>
        <div className="add-ons-card">
          <div className="add_ons_logo">
            <img src="" alt="" />
          </div>
          <div>
            <div className="add-ons-details">
              <div className="add_ons_status">Inactive</div>
              <div className="add_ons_dots"></div>
            </div>
            <div className="add_ons_name">
              <h2>Barcode</h2>
            </div>
            <div className="add_ons_learnMore">
              <Popup
                trigger={
                  <button className="learn_more_add_ons">Learn More</button>
                }
                position="right center"
              >
                <div>Popup content here !!</div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOn;
