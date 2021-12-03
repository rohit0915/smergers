import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import { Grid, Card, Button } from '@material-ui/core';
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';
import "./GetStarted.css";
function BuyingBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Buying A Business</div>
                <div>
                    <p className="Privacy_content">Whether you are buying a business to run it yourself or acquiring one
                        for a strategic advantage , the process and due diligence conducted is similar. There are many reasons
                        why buying an existing business is better than starting one: reduced risk, immediate cash flows, established
                        vendor and customer relationships, avoiding time consuming and tedious startup work, and so on.</p>
                    <p className="Privacy_content">We understand that Buyers need a lot of information before they decide to
                        make the purchase. It is important for the buyer to know if the business is legitimate, valuation is
                        reasonable, industry is attractive and if there are any other better opportunities. The best way to answer these questions is
                        by talking to as many businesses as possible as you will be in a better position to evaluate them.</p>
                    <p className="Privacy_content">SMERGERS provides a platform to compare and evaluate various pre-qualified businesses across industries
                        and geographies</p>
                </div>
                
                <div className="mt-5 mb-5">
                <iframe width="100%" height="700"  src="https://www.youtube.com/embed/pvXMhgdovtE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default withRouter(HOC1(BuyingBusiness));
