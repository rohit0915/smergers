import React, { useState, useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import "./FAQ.css";
import { Grid, Card } from '@material-ui/core';
import "antd/dist/antd.css";
import { Pagination } from "antd";
import faq from "./Faq.png";

function FAQ() {
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(10);
    let data = [
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How do I change my existing password?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "Where can I see the number of emails sent as part of accelerated marketing?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "Why my closed profile still show up on a search engine?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "Why does my closed profile still show up on a search engine?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "Why does my closed profile still show up on a search engine?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },
        { title: "How can I unsubscribe from emails?", value: "Log in to your Dashboard, click your profile picture on the upper right corner and select Settings as shown in the image below. You'll see an option to update your Email Preferences on the left" },

    ];
    const handleChange = (value) => {
        window.scrollTo(0, 0);
        if (value <= 1) {
            setminValue(0)
            setmaxValue(10)

        } else {
            setminValue(maxValue)
            setmaxValue(value * 10)

        }
    };

    const [search, setsearch] = useState("")

    const filterCompleted = data.filter((event) => {
        return (
            event.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={3}>
                        <Card className="Card_shadow mt-1 ml-2 mr-2">
                            <div className="text-center">
                                <div>
                                    <img src={faq} alt="" className="faq_image" />
                                    <p className="Privacy_content">One destination for all information related to Mergers, Acquisition
                                        and Investments</p>
                                </div>
                            </div>
                            <div>
                                <div className="border_botom">For</div>
                                <div className="border_botom press_heading pl-5">Business Owners</div>
                                <div className="border_botom press_heading pl-5">Financial Advisors</div>
                                <div className="border_botom press_heading pl-5">Acquirers & Buyers</div>
                                <div className="border_botom press_heading pl-5">Investors</div>
                                <div className="border_botom press_heading pl-5">Franchisors</div>
                            </div>
                            <div>
                                <div className="border_botom">Stage</div>
                                <div className="border_botom press_heading pl-5">Preparation</div>
                                <div className="border_botom press_heading pl-5">Valuation & Negotiation</div>
                                <div className="border_botom press_heading pl-5">Advertising</div>
                                <div className="border_botom press_heading pl-5">Initial Interactions</div>
                                <div className="border_botom press_heading pl-5">Due Diligence</div>
                                <div className="border_botom press_heading pl-5">Closing the deal</div>
                                <div className="border_botom press_heading pl-5">Post Deal Matters</div>
                            </div>
                            <div>
                                <div className="border_botom">Transaction</div>
                                <div className="border_botom press_heading pl-5">Business For Sale</div>
                                <div className="border_botom press_heading pl-5">Business Loan</div>
                                <div className="border_botom press_heading pl-5">Franchise</div>
                                <div className="border_botom press_heading pl-5">Business Investment</div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={9}>
                        <Card className="Card_shadow mt-1 ml-2 mr-2">
                            <div className="d-flex justify-content-between">
                                <span className="m-3 Pivacy_heading">Question and Answers</span>
                                <span className="m-3">
                                    <div className="d-flex">
                                        <span className="mr-2 pt-2"><i class="fa fa-search"></i></span>
                                        <span><input type="text"
                                            class="form-control"
                                            placeholder="Seach Frequently Asked Question..."
                                            value={search}
                                            onChange={(e) => {
                                                setsearch(e.target.value)
                                            }}
                                        /></span>
                                    </div>

                                </span>
                            </div>
                            <hr />
                            <div className="m-3">
                                {filterCompleted &&
                                    filterCompleted.length > 0 &&
                                    filterCompleted.slice(minValue, maxValue).map(item => (
                                        <div className="mt-2 mb-2">
                                            <div className="press_heading">{item.title}</div>
                                            <div className="mb-2">{item.value.substring(0, 150) + "..."}</div>
                                        </div>
                                    ))}
                                <Pagination
                                    defaultCurrent={1}
                                    defaultPageSize={10}
                                    onChange={handleChange}
                                    total={500}
                                />
                            </div>
                        </Card>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default withRouter(HOC1(FAQ));
