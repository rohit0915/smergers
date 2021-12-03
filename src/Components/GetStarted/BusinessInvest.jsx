import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import { Grid, Card, Button } from '@material-ui/core';
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';
import "./GetStarted.css";
function BusinessInvest() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">How to Invest in a Business</div>
                <div>
                    <p className="Privacy_content">Whether it is for financial returns, strategic value or pure passion ,
                        investing in businesses has always been an exciting pursuit. Private lenders and Private Equity firms
                        invest in businesses purely for the financial return. But on the other hand, a strategic investor would
                        invest mainly because of the expected synergies between his company and the investee company.</p>
                    <p className="Privacy_content">We understand that analysing business opportunities is different for each
                        investor and the best way to go about this is to directly connect with the
                        business owner to understand his business , products/services, background and investment plans.</p>
                    <p className="Privacy_content">SMERGERS provides a secure platform to connect with various pre-qualified business
                        investment opportunities</p>
                </div>

                <div>
                    <Grid className="Component_main_grid mt-2 p-3">
                        <Grid item md={1}></Grid>
                        <Grid item md={2}>
                            <div className="text-center">Today</div>
                            <Card className="Card_shadow mt-1 ml-2 mr-2">
                                <div className="card_heading_bussiness text-center">REGISTRATION ON SMERGERS</div>
                                <div className="text-info p-2">Explain your business and reason for exit in a clear and compelling manner.
                                    Choose the service level you want from SMERGERS.
                                </div>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <div className="text-center">Tomorrow</div>
                            <Card className="Card_shadow mt-1 ml-2 mr-2">
                                <div className="card_heading_bussiness text-center">PROFILE ACTIVATION & RECOMMENDATION</div>
                                <div className="text-info p-2">SMERGERS reviews your business details and activates your profile.
                                    SMERGERS also sends you a list of recommended buyers for your business</div>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <div className="text-center">By Second Week of October</div>
                            <Card className="Card_shadow mt-1 ml-2 mr-2">
                                <div className="card_heading_bussiness text-center">BUYER INTRODUCTIONS</div>
                                <div className="text-info p-2">Interested acquirers start connecting with you. You can send proposals to acquirers to
                                    accelerate the process. To protect confidentiality, you can ask them to sign a NDA</div>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <div className="text-center">By Last Week of October</div>
                            <Card className="Card_shadow mt-1 ml-2 mr-2">
                                <div className="card_heading_bussiness text-center">SHARING DOCUMENTS</div>
                                <div className="text-info p-2">It is important to share a professionally-written Information Memorandum and Financial Projection
                                    with the investor. This helps the buyer evaluate the opportunity quickly and arrive at a decision.</div>
                            </Card>
                        </Grid>
                        <Grid item md={2}>
                            <div className="text-center">By December</div>
                            <Card className="Card_shadow mt-1 ml-2 mr-2">
                                <div className="card_heading_bussiness text-center">DUE DILIGENCE & CLOSURE</div>
                                <div className="text-info p-2">Post agreement, the buyer will conduct a due diligence to cross-check all information
                                    shared earlier. If no discrepancies are found, the deal is complete and you receive the
                                    required amount.</div>
                            </Card>
                        </Grid>
                        <Grid item md={1}></Grid>
                    </Grid>
                </div>

                <div className="note_message">Note: Illustrative timeline for "Fast Track" businesses shown above. Actual timelines may vary depending
                    on industry attractiveness, business preparedness and valuation expectations.</div>

                <div className="text-center Pivacy_heading mt-5 mb-3">Select Service Level</div>

                <div className="text-center">Based on how prepared you are and level of assistance required, select one of the plans below</div>
                <div>
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

                <div className="mt-3 mb-3 text-center">
                    <p>Note: All prices are inclusive of taxes. All plans have access to Business Dashboard, Interested
                        Buyer/Investor Contact details, and Online Valuation Tool. Paid plans are valid for a period of 1
                        year or till deal closure, whichever is earlier. All plans have a 1% finder's fee post transaction
                        closure for business owners. If you are
                        an advisor looking to list multiple businesses click here. * Fair Usage Policy Applicable.</p>
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

export default withRouter(HOC1(BusinessInvest));
