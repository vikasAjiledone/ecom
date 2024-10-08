import React from 'react'
import './Settings.css'

const Setting = () => {
    return (
        <div>
            <div className='setting'>
                <h2>Settings</h2>
                <div className="set-container">
                    <div className="set-item">
                        <h3>Notifications</h3>
                        <p>Set up alerts to be notified when you receive new orders or if any of your items need to be reordered.
                        </p>
                        <button className='manage-btn'>Manage</button>
                    </div>
                    <div className="set-item">
                        <h3>Warehouses</h3>
                        <p>Create and manage warehouses allowing you to keep an eye on any location you store your inventory
                        </p>
                        <button className='manage-btn'>Manage</button>
                    </div>
                    <div className="set-item">
                        <h3>Suppliers</h3>
                        <p>Add the suppliers you order your stock from
                        </p>
                        <button className='manage-btn'>Manage</button>
                    </div>
                    <div className="set-item">
                        <h3>Sales Channels                        </h3>
                        <p>Integrate your accounts with supported online marketplaces and shopping carts such as Amazon, Ebay, Shopify, etc.
                        </p>
                        <button className='manage-btn'>Manage</button>
                    </div>
                    <div className="set-item">
                        <h3>File Templates                        </h3>
                        <p>Inventory templates allow you to upload files with product information in bulk.
                        </p>
                        <button className='manage-btn'>Manage</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting