// src/App.jsx
import React from "react";
import Sidebar from "./Components/Sidebar";
// import Header from './Components/Header';
import MainContent from "./pages/MainContent/MainContent";
// import Footer from './Components/Footer';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlogin from "./pages/Login/Mainlogin";
import LoginAccess from "./pages/Login/LoginAccess";
import Reporting from "./pages/Reporting/Reporting";
import ReportingApply from "./pages/Reporting/ReportingApply";
import MyAccount from "./pages/Account/MyAccount";
import AddOn from "./pages/Add_ons/AddOn";
import Setting from './pages/Settings/Setting';
import Products from './pages/Products/Products';
import Support from "./pages/Support/Support";
import GetSupport from "./Components/GetSupport/GetSupport";
import Accounting from "./Components/Accoounting/Accounting";
import Integration from "./Components/Integrationsales/Integration";
import SupportReporting from "./Components/SupportReporting/SupportReporting";
import SalesOrder from "./Components/Salesorder/SalesOrder";
import AdvanceSearch from "./Components/AdvanceSearch/AdvanceSearch";
import ProductListing from "./Components/ProductListing/ProductListing";
import SetupManagement from "./Components/SetupManagement/SetupManagement";
import SendEmail from "./SubComponent/GetSupportData/SendEmail";
import Livechat from "./SubComponent/GetSupportData/Livechat";
import ScheduleCall from "./SubComponent/GetSupportData/ScheduleCall";
import AddQuickBook from "./SubComponent/AccountingSection/AddQuickBook";

const App = () => {
  let pathName = window.location.pathname;

  console.log(pathName === "/login" || pathName === "/access");
  return (
    <div>
      <Router>
        <div className="app">
          {!(pathName === "/login" || pathName === "/access") && <Sidebar />}
          <div className="content">
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<Mainlogin />} />
              <Route path="/access" element={<LoginAccess />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/reportingDetails" element={<ReportingApply />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/addon" element={<AddOn />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/support" element={<Support />} />
              <Route path="/products" element={<Products />} />
              <Route path="/getsupport" element={<GetSupport />} />
              <Route path="/accounting" element={<Accounting />} />
              <Route path="/integrationsales" element={<Integration />} />
              <Route path="/supportreporting" element={<SupportReporting />} />
              <Route path="/salesorder" element={<SalesOrder />} />
              <Route path="/advancesearch" element={<AdvanceSearch />} />
              <Route path="/productlisting" element={<ProductListing />} />
              <Route path="/setupManagement" element={<SetupManagement />} />
              <Route path="/getsupportemail" element={<SendEmail />} />
              <Route path="/chatSupport" element={<Livechat />} />
              <Route path="/ScheduleCall" element={<ScheduleCall />} />
              <Route path="/AddQuickBook" element={<AddQuickBook />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
