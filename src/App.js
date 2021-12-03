import React from 'react';

//route to the various paths
import { Switch, Route,Redirect } from "react-router-dom"

//used css
import './App.css';

//components
import Home from "./Components/Home/Home.jsx";
import PrivacyPolicy from "./Common/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Common/PrivacyPolicy/Terms";
import ContactUs from "./Common/ContactUs/ContactUs";
import RefundPolicy from "./Common/PrivacyPolicy/RefundPolicy";
import AboutUs from "./Components/AboutUs/AboutUs";
import PressDetail from "./Components/AboutUs/PressDetail";
import AllPressData from "./Components/AboutUs/AllPressData";
import SellBusiness from "./Components/GetStarted/SellBusiness";
import FinanceBusiness from "./Components/GetStarted/FinanceBusiness";
import BuyingBusiness from "./Components/GetStarted/BuyingBusiness";
import BusinessInvest from "./Components/GetStarted/BusinessInvest";
import ValueYourBusiness from "./Components/GetStarted/ValueYourBusiness";
import RegisterAsAdvisor from "./Components/GetStarted/RegisterAsAdvisor";
import FAQ from "./Components/FAQ/FAQ";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditUserProfile from "./Components/Dashboard/EditUserProfile";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import BusinessInvestment from "./Components/BusinessInvestment/InvestmentOpportunity";
import BusinessDetail from "./Components/BusinessDetail/BusinessDetail";
import BusinessForSale from "./Components/BusinessForSale/BusinessForSale";
import BusinessLoan from "./Components/BusinessLoan/BusinessLoan";
import AssestForSale from "./Components/AssestForSale/AssestForSale";
import IndividualInvester from "./Components/Investers/IndividualInvester";
import BusinessBuyer from "./Components/Investers/BusinessBuyer";
import CorporateInvester from "./Components/Investers/CorporateInvester";
import VentureCapital from "./Components/Investers/VentureCapital";
import PrivateEquity from "./Components/Investers/PrivateEquity";
import FamilyOffice from "./Components/Investers/FamilyOffice";
import BusinessLender from "./Components/Investers/BusinessLender";

//scrooll to top
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/refund-policy" component={RefundPolicy} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/press-detail" component={PressDetail} />
        <Route exact path="/allpress-data" component={AllPressData} />
        <Route exact path="/how-to-sell-your-business" component={SellBusiness} />
        <Route exact path="/how-to-finance-your-business" component={FinanceBusiness} />
        <Route exact path="/buying-a-business" component={BuyingBusiness} />
        <Route exact path="/how-to-invest-in-business" component={BusinessInvest} />
        <Route exact path="/value-your-business" component={ValueYourBusiness} />
        <Route exact path="/register-as-advisor" component={RegisterAsAdvisor} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/disclaimer" component={Disclaimer} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/edit-user-profile" component={EditUserProfile} />
        <Route exact path="/set-password" component={ChangePassword} />
        <Route exact path="/investment-opportunity" component={BusinessInvestment} />
        <Route exact path="/business-detail" component={BusinessDetail} />
        <Route exact path="/business-for-sale" component={BusinessForSale} />
        <Route exact path="/business-seeking-loan" component={BusinessLoan} />
        <Route exact path="/business-assest-for-sale" component={AssestForSale} />
        <Route exact path="/individual-invester" component={IndividualInvester} />
        <Route exact path="/business-buyers" component={BusinessBuyer} />
        <Route exact path="/business-strategic-investors" component={CorporateInvester} />
        <Route exact path="/venture-capital-firms" component={VentureCapital} />
        <Route exact path="/private-equity-firms" component={PrivateEquity} />
        <Route exact path="/family-office" component={FamilyOffice} />
        <Route exact path="/business-lender" component={BusinessLender} />
        <Redirect to="/"/>
      </Switch>
    </>
  );
}

export default App;
