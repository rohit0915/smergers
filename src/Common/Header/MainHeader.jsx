import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import headerlogo from "../headerlogo.png"
import "./Header.css";
import { Button } from '@material-ui/core';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    LinkedInLoginButton,
} from "react-social-login-buttons";

const MainHeader = (props) => {
    const [loginHandle, setloginHandle] = useState(false)
    const [Sidebar, setSidebar] = useState(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClick = () => {
        alert("Hello!");
    }

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }

    return (
        <div>
            <AppBar position="fixed" className="transparent">
                <div className="p-2" >
                    {/* logo */}
                    <div className="d-flex justify-content-between">
                        <span><img src={headerlogo} alt="" className="headerlogo" /></span>
                        <div className="flag_mobile">flag</div>
                        <div className="currency_mobile">USD</div>
                        <div className="input-group input_felid_formatting input_with_button" >
                            <input type="text" className="form-control" placeholder="Ex.Business for sale" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary search-button" type="button"><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="register_button"><Button className="register_btn button_login_decoration" onClick={() =>
                            setloginHandle(true)
                        }>Register</Button></div>

                        <div class="dropdown add_Profile_dropdown">
                            <div class="link_color" data-toggle="dropdown"><i class="fa fa-plus mr-1"></i>Add Profile
                            </div>
                            <div class="dropdown-menu animate slideIn dopdown_formatting">
                                <div className="dropdownLinks pl-2">Add Business Profile</div>
                                <div className="dropdownLinks pl-2">Add Investor Profile</div>
                                <div className="dropdownLinks pl-2">Add Franchise / Distributor Profile</div>
                                <div className="dropdownLinks pl-2">Add Advisor Profile</div>
                            </div>
                        </div>
                        <div className="link_color login_buton" onClick={() =>
                            setloginHandle(true)
                        }>Login</div>
                        <span
                            className="logout_Pointer_cursor mobile_Burger_Menu mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                    </div>
                    <div className="links">
                        <span className="link_color pl-2" onClick={() => props.history.push("/home")}>Home</span>
                        <span className="link_color pl-2" onClick={() => props.history.push("/business-for-sale")}>Businesses For Sale</span>
                        <span className="link_color pl-2" onClick={() => props.history.push("/investment-opportunity")}>Investment Opportunities</span>
                        <span className="link_color pl-2" onClick={() => props.history.push("/business-seeking-loan")}>Businesses Seeking Loan</span>
                        <span className="link_color pl-2" onClick={() => props.history.push("/business-assest-for-sale")}>Business Assets For Sale</span>
                        <div class="dropdown link_color">
                            <div class="dropdown-toggle" data-toggle="dropdown">Investors
                            </div>
                            <div class="dropdown-menu">
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/individual-invester")}>Individual Investors</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/business-buyers")}>Business Buyers</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/business-strategic-investors")}>Corporate Investors</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/venture-capital-firms")}>Venture Capital Firms</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/private-equity-firms")}>Private Equity Firms</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/family-office")}>Family Offices</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/business-lender")}>Business Lenders</div>
                            </div>
                        </div>
                        <div class="dropdown link_color">
                            <div class="dropdown-toggle" data-toggle="dropdown">Company
                            </div>
                            <div class="dropdown-menu">
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/blogs")}>Blogs</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/about-us")}>About us</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/privacy")}>Private policy</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/disclaimer")}>Disclaimer</div>
                                <div className="dropdownLinks pl-2">Gallery</div>
                                <div className="dropdownLinks pl-2" onClick={() => props.history.push("/faq")}>FAQs</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div id="mySidenav" className="sidenav">
                        <div className="cross_icon_style">
                            <i
                                class="fa fa-times cursor"
                                onClick={() => {
                                    document.getElementById("mySidenav").style.width =
                                        "0px";
                                }}
                            ></i>
                        </div>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/home")}>
                            Home
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() =>
                            setloginHandle(true)
                        }>
                            Register
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() =>
                            setloginHandle(true)
                        }>
                            Login
                        </span>

                        {/* businesses*/}
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-for-sale")}>
                            Businesses For Sale
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/investment-opportunity")}>
                            Investment Opportunities
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-seeking-loan")}>
                            Businesses Seeking Loan
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-assest-for-sale")}>
                            Business Assets For Sale
                        </span>

                        {/* Invester*/}
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/individual-invester")}>
                            Individual Investers
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-buyers")}>
                            Business Buyers
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-strategic-investors")}>
                            Corporate Investers
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/venture-capital-firms")}>
                            VC Firms
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/private-equity-firms")}>
                            PE Firms
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/family-office")}>
                            Family Offices
                        </span>
                        <span className="logout_Pointer_cursor" onClick={() => props.history.push("/business-lender")}>
                            Business Lenders
                        </span>
                    </div>
                </div>
            </AppBar>
            <Dialog
                open={loginHandle}
                onClose={() => {
                    setloginHandle(false)
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <div className="text-right cross_icon_color_red"><i class="fa fa-times-circle Cursour_pointer" onClick={() => {
                        setloginHandle(false)
                    }}></i></div>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="SOCIAL" {...a11yProps(0)} />
                        <Tab label="REGISTER" {...a11yProps(1)} />
                        <Tab label="lOGIN" {...a11yProps(2)} />
                    </Tabs>
                </DialogTitle>
                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
                        <TabPanel value={value} index={0}>
                            <GoogleLoginButton onClick={handleClick} />
                            <LinkedInLoginButton onClick={handleClick} className="mt-2" />
                            <FacebookLoginButton onClick={handleClick} className="mt-2" />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div>
                                <label className="input_label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div>
                                <label className="input_label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div>
                                <label className="input_label">Repeat Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div>
                                <Button className="btn_for_register mt-3" >Verify Email</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div>
                                <label className="input_label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div>
                                <label className="input_label">Password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <span class="forgot_link_font float-right text-info">
                                Forgot Your Password?
                            </span>
                            <div>
                                <Button className="btn_for_register mt-3" onClick={() => props.history.push("/dashboard")}>Login</Button>
                            </div>
                        </TabPanel>
                    </DialogContentText>
                </DialogContent>

            </Dialog></div>


    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default MainHeader
