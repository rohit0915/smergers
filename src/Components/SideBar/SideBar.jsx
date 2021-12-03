import { ProSidebar, Menu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.css";

//tab pannel
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SideBar = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div id="firstsidebar">
            <ProSidebar>

                <Menu iconShape="circle">

                    <div className="m-2">
                        <p className="siebar_top_head">Filter By</p>
                    </div>

                    {/* two tabs*/}
                    <div className="sidebar_tabs">
                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                        <Tab label="Businesses" {...a11yProps(0)} className="button_login_decoration" />
                        <Tab label="Investers & Buyers" {...a11yProps(1)} className="button_login_decoration" />
                    </Tabs>
                    </div>

                    {/* first tab data*/}
                    <TabPanel value={value} index={0}>
                        <div><i class="fa fa-briefcase mr-2"></i>Transation Types</div>
                        <div className="mt-3 mb-2 left_pannel_links" onClick={() => props.history.push("/business-for-sale")}>Business For Sale</div>
                        <div className="mt-2 mb-2 left_pannel_links" onClick={() => props.history.push("/investment-opportunity")}>Investment Opportunity</div>
                        <div className="mt-2 mb-2 left_pannel_links" onClick={() => props.history.push("/business-seeking-loan")}>Business Loan</div>
                        <div className="mt-2 mb-2 left_pannel_links" onClick={() => props.history.push("/business-assest-for-sale")}>Assests For Sale</div>
                        <div className="mt-2 mb-2 left_pannel_links">Franchaise Opportunity</div>

                    </TabPanel>

                    {/* second tab data*/}
                    <TabPanel value={value} index={1}>
                        <div><i class="fa fa-user mr-2"></i>Invester Type</div>
                        <div className="mt-3 mb-2 left_pannel_links" onClick={() => props.history.push("/individual-invester")}>Individuals</div>
                        <div className="mt-2 mb-2 left_pannel_links" onClick={() => props.history.push("/business-strategic-investors")}>Companies</div>
                        <div className="mt-2 mb-2 left_pannel_links" onClick={() => props.history.push("/business-lender")}>Lenders</div>
                        <div className="mt-2 mb-2 left_pannel_links">Financial Advisor</div>
                        <div className="mt-2 mb-2 left_pannel_links">  <div class="dropdown link_color">
                            <div data-toggle="dropdown">Funds
                            </div>
                            <div class="dropdown-menu">
                                <div className="left_pannel_links pl-2" onClick={() => props.history.push("/venture-capital-firms")}>VC Firms</div>
                                <div className="left_pannel_links pl-2" onClick={() => props.history.push("/private-equity-firms")}>PE Firms</div>
                                <div className="left_pannel_links pl-2" onClick={() => props.history.push("/family-office")}>Family Offices</div>
                                <div className="left_pannel_links pl-2">Search Funds</div>

                            </div>
                        </div></div>
                        <hr />

                        <div><i class="fa fa-briefcase mr-2"></i>Intrested In</div>
                        <div className="mt-3 mb-2 left_pannel_links">Buying a Business</div>
                        <div className="mt-2 mb-2 left_pannel_links">Investing in a Business</div>
                        <div className="mt-2 mb-2 left_pannel_links">Lending to a Business</div>
                        <div className="mt-2 mb-2 left_pannel_links">Buying Business Assets</div>
                        <div className="mt-2 mb-2 left_pannel_links">Buying a Franchise</div>
                    </TabPanel>


                </Menu>

            </ProSidebar>

        </div>

    );
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

export default SideBar;
