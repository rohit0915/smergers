import React from 'react'
import { Grid } from '@material-ui/core';
import headerlogo from "../headerlogo.png"
import "./Footer.css";
function Footer(props) {
    return (
        <>
            <hr />
            <div className="ml-4 mr-4">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={2}>
                        <div className="Footer_heading">Businesses</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-for-sale")}>Businesses For Sale</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/investment-opportunity")}>Investment Opportunities</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-seeking-loan")}>Businesses Seeking Loan</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-assest-for-sale")}>Business Assets For Sale</div>
                        <div className="Footer_heading">Franchises</div>
                        <div className="Footer_heading_Links">Franchises For Sale</div>
                        <div className="Footer_heading_Links">Franchise Investors</div>

                    </Grid>
                    <Grid item md={2}>
                        <div className="Footer_heading">Investors</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/individual-invester")}>Individual Investors</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-buyers")}>Business Buyers</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-strategic-investors")}>Corporate Investers</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/venture-capital-firms")}>Venture Capital Firms</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/private-equity-firms")}>Private Equity Firms</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/family-office")}>Family Offices</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/business-lender")}>Business Lenders</div>

                    </Grid>
                    <Grid item md={2}>
                        <div className="Footer_heading">Advisors</div>
                        <div className="Footer_heading_Links">Businesses Seeking Advisors</div>
                        <div className="Footer_heading_Links">Investment Banks</div>
                        <div className="Footer_heading_Links">M&A Advisors</div>
                        <div className="Footer_heading_Links">Business Brokers</div>
                        <div className="Footer_heading_Links">CRE Brokers</div>
                        <div className="Footer_heading_Links">Financial Consultants</div>
                        <div className="Footer_heading_Links">Accountants</div>
                        <div className="Footer_heading_Links">Law Firms</div>
                    </Grid>
                    <Grid item md={2}>
                        <div className="Footer_heading">Get Started</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/how-to-sell-your-business")}>Sell your Business</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/how-to-finance-your-business")}>Finance your Business</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/buying-a-business")} >Buy a Business</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/how-to-invest-in-business")}>Invest in a Business</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/value-your-business")}>Value your Business</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/register-as-advisor")}>Register as Advisor</div>

                    </Grid>
                    <Grid item md={2}>
                        <div className="Footer_heading">Company</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/about-us")}>About</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/privacy")}>Private policy</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/disclaimer")}>Disclaimer</div>
                        <div className="Footer_heading_Links">Gallery</div>
                        <div className="Footer_heading_Links" onClick={() => props.history.push("/faq")}>FAQs</div>

                    </Grid>
                    <Grid item md={2}>
                        <div><img src={headerlogo} alt="" className="Footer_logo" onClick={() => props.history.push("/")} /></div>
                        <div><span className="icon"><i class="fa fa-envelope"></i></span><span className="Footer_heading_Links ml-1" onClick={() => props.history.push("/contact-us")}>Contact us</span></div>
                        <div><span className="icon"><i class="fa fa-facebook"></i></span><span className="Footer_heading_Links ml-1">Facebook</span></div>
                        <div><span className="icon1"><i class="fa fa-linkedin"></i></span><span className="Footer_heading_Links ml-1">LinkedIn</span></div>
                        <div><span className="icon2"><i class="fa fa-youtube"></i></span><span className="Footer_heading_Links ml-1">Youtube</span></div>
                        <div><span className="icon3"><i class="fa fa-twitter"></i></span><span className="Footer_heading_Links ml-1">Twitter</span></div>
                        <div><span className="icon4"><i class="fa fa-instagram"></i></span><span className="Footer_heading_Links ml-1">Instagram</span></div>
                    </Grid>
                </Grid>
            </div>

            <hr />
            <div className="d-flex justify-content-between mb-5">
                <div className="Footer_heading ml-3">Copyright © {new Date().getFullYear()} SMERGERS Online Services Private Limited. All Rights Reserved.</div>
                <div className="d-flex mr-2">
                    <span className="Footer_link_color" onClick={() => props.history.push("/privacy")}>privacy Policy</span>
                    <span className="Footer_link_color ml-2" onClick={() => props.history.push("/terms")} >Terms of Use</span>
                    <span className="Footer_link_color ml-2" onClick={() => props.history.push("/refund-policy")}>Refund Policy</span>
                    <span className="Footer_link_color ml-2">Best Practices</span>
                    <span className="Footer_link_color ml-2">Sitemap</span>
                </div>
            </div>
        </>
    )
}

export default Footer
