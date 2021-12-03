import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import { Grid, Card, Button } from '@material-ui/core';
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';

//css
import "./GetStarted.css";

//tab pannel
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function RegisterAsAdvisor() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Advisors and Business Brokers</div>
                <div>
                    <p className="Privacy_content">#1 Platform for Dealmakers - Financial advisors, Investment bankers, M&A
                        consultants, Accountants and Business Brokers. Engage
                        directly with business owners, investors, buyers and strategic acquirers matching your requirements.</p>
                </div>

                <div>
                    <Grid className="Component_main_grid mt-2 p-3">

                        <Grid item md={6}>
                            <div className="components_data_margin">
                                <div className="d-flex justify-content-between">
                                    <span><img src="https://www.smergers.com/static/images/howto/xmandate.png.pagespeed.ic.tKjAWHcDYj.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Deal Origination</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <span><img src="https://www.smergers.com/static/images/howto/xtrustednetwork.png.pagespeed.ic.bmnePvL9Rr.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Pre-qualified Network</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <span><img src="https://www.smergers.com/static/images/howto/xtrack.png.pagespeed.ic.4RFwvcgzzo.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Profile Tracking and Analytics</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="components_data_margin">
                                <div className="d-flex justify-content-between">
                                    <span><img src="https://www.smergers.com/static/images/howto/xlead_gen.png.pagespeed.ic.IvhNpq0L2N.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Lead Generation</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <span><img src="https://www.smergers.com/static/images/howto/xsecure.png.pagespeed.ic.f7DFt3z_Bx.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Client Confidentiality</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>

                                <div className="d-flex justify-content-between mt-3">
                                    <span><img src="https://www.smergers.com/static/images/howto/xvaluation.png.pagespeed.ic.ZETf1ex4ho.webp" alt="" className="image_icon_height_advisor" /></span>
                                    <span className="pl-2 pr-2">
                                        <p className="value_your_bussiness_heading">Business Valuation Tool</p>
                                        <p> Win mandates from Business owners ready to work with advisors. SMERGERS supports you in closing the transaction by
                                            generating matching leads</p>
                                    </span>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>

                <div className="m-3">
                    <span>
                        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                            <Tab label="Buy Side Plans" {...a11yProps(0)} className="button_login_decoration" />
                            <Tab label="Sell Side Plans" {...a11yProps(1)} className="button_login_decoration" />
                        </Tabs>
                    </span>
                </div>
                <div>

                    <TabPanel value={value} index={0}>
                        <div>
                            <div className="Pivacy_heading text-center">Select Buy-side Advisor Plan to connect with Businesses</div>
                            <Grid className="Component_main_grid mt-4 p-3">
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Basic Business</div>
                                            <div className="text-info p-2">Free</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Active Business</div>
                                            <div className="text-info p-2">USD 25</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify" data-toggle="tooltip" data-placement="top" title="Basic Business Profile">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>

                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Fast Track Business</div>
                                            <div className="text-info p-2">Free</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Professional Business</div>
                                            <div className="text-info p-2">Free</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div>
                            <div className="Pivacy_heading text-center">Select Sell-side Advisor Plan to list Businesses</div>
                            <Grid className="Component_main_grid mt-4 p-3">
                                <Grid item md={3}>

                                </Grid>
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Active Business</div>
                                            <div className="text-info p-2">USD 25</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify" data-toggle="tooltip" data-placement="top" title="Basic Business Profile">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>

                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item md={3}>
                                    <Card className="Card_shadow mt-1 ml-2 mr-2 Card_height">
                                        <div className="text-center">
                                            <div className="Select_service mt-2">Fast Track Business</div>
                                            <div className="text-info p-2">Free</div>
                                            <hr />
                                            <div className="Privacy_content">Businesses which are not actively seeking Buyers but are open to opportunistic offers</div>
                                            <div className="mt-2">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div className="mt-1">
                                                <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                                <span className="ml-2 text-justify">Basic Business Profile</span>
                                            </div>
                                            <div><Button className="select_plan_btn mt-5">Select Plan</Button></div>
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item md={3}>

                                </Grid>
                            </Grid>
                        </div>
                    </TabPanel>
                </div>

                <div className="mt-3 mb-3 text-center">
                    <p className="Privacy_content">Note: All prices are inclusive of taxes. All plans have access to
                        Business Dashboard, Interested Buyer/Investor Contact details, and Online Valuation
                        Tool. Paid plans are valid for a period of 1 year or till deal closure, whichever is earlier.</p>
                </div>

                <hr />

                {/* Asked Quesion component*/}
                <div className="mt-3">
                    <AskedQuestion />
                </div>
            </div>
        </>
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

export default withRouter(HOC1(RegisterAsAdvisor));
