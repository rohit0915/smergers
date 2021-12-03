import React, { useEffect } from 'react'
import "./AboutUs.css";
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import { Grid, Card } from '@material-ui/core';
import AskedQuestion from './AskedQuestion';
function AboutUs(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const whousesSemers = [
        { value: "Businesses For Sale" },
        { value: "Companies Seeking Capital" },
        { value: "Franchise Brands" },
        { value: "Boutique Investment Banks" },
        { value: " M&A Advisors" },
        { value: "Business Brokers" },
        { value: "Private Investors" },
        { value: "Corporate Acquirers" },
        { value: "Lenders" },
        { value: "PE / VC / Funds" },
        { value: "Deal Professionals" },
    ];

    const whySemers = [
        { value: "Simple and straight forward" },
        { value: "Pre-approved profiles only" },
        { value: "Confidential “no name” profiles till introduction is made" },
        { value: "Automatic matching of profiles" },
        { value: " Insights to improve your profile" },
        { value: "Instant ‘rule of thumb’ valuation" },
        { value: "Ratings to sort good profiles" },
        { value: "Easy Messaging and Doc Sharing" },
        { value: "Thousands of business owners, investors, lenders and advisors trust SMERGERS" },
    ];

    const pressdata = [
        { heading: "India Today Aspire - How to Bootstrap Your Start-Up? - Vishal Devanath, Founder,Vishal Devanath, FounderVishal Devanath, Founder", data: "Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post. Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post.Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post." },
        { heading: "Economic Times - Buyer interest in SME space has gone up post-Covid: Vishal Devanath,", data: "Deal sizes in SME space are at least 25-30% down compared to pre-Covid times and this is a good time to pick up businesses to expand offering Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },
        { heading: "Hindu Business Line - SMERGERS reports a 40 percent increase in business listings related,", data: "Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." }
    ]


    return (
        <>
            <div className="content_margin mb-5">
                <div className="About_us_main_heading">SMERGERS - World's #1 Deal Platform.*</div>
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={6}>
                        <div className="refund_policy_heading">SMERGERS is making investment banking accessible to small and medium enterprises.</div>
                        <div><p className="Privacy_content text-justify" >SMERGERS is a Private Market Network for Businesses, Investors, Acquirers, Lenders, M&A Advisors and
                            Boutique Investment Banks. Our platform automates deal origination, valuation, matching and introduction
                            of businesses and investors across the globe. With the click of a button members can access investment
                            banking services such as Mergers and Acquisitions, Fund Raising, Joint Ventures & Debt transactions.</p>
                            <p className="Privacy_content text-justify">Business owners, Entrepreneurs, CEOs, Investors, Acquirers, Business Buyers, Lenders and Financial
                                Advisors from different parts of the world discover each other and connect almost instantly to
                                pursue financial transactions. Whether it is a small family business or a large established
                                company, SMERGERS has access to the right network of members to help close successful transactions.</p>
                            <p className="Privacy_content text-justify">* Based on Alexa rankings as of April 2020</p>
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="components_data_margin ">
                            <div className="refund_policy_heading text-center">Who uses SMERGERS</div>
                            {whousesSemers.map((item, index) => (
                                <div className="mt-1">
                                    <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                    <span className="ml-2">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="components_data_margin ">
                            <div className="refund_policy_heading text-center">Why SMERGERS</div>
                            {whySemers.map((item, index) => (
                                <div className="mt-1">
                                    <span className="icon_about_us"><i class="fa fa-check-circle"></i></span>
                                    <span className="ml-2 text-justify">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>

                <div className="mt-3 mb-3 text-center Pivacy_heading">Press</div>
                <div className="press_cards">
                    {pressdata.map((item, index) => (
                        <Card className="Card_shadow mt-2 ml-3 mr-3">
                            <div className="p-2">
                                <div className="press_heading" onClick={() => props.history.push("/press-detail", {
                                    item: item
                                })}>{item.heading.substring(0, 70) + "..."}</div>
                                <div className="Privacy_content">July 29,2021</div>
                                <hr />

                                <div>
                                    <Grid className="Component_main_grid mt-2">
                                        <Grid item md={4}>
                                            <div className="press_images">
                                                <img src="https://www.smergers.com/media/uploads/Nx550xindiatodayaspirecollage.jpg.pagespeed.ic.j-dKIo_b2l.webp" alt="" className="press_img_formatting" />
                                            </div></Grid>
                                        <Grid item md={8}>
                                            <div className="ml-3 Privacy_content">{item.data.substring(0, 100) + "..."}</div>
                                            <div className=" text-right mt-2 mb-2" ><span className="press_heading" onClick={() => props.history.push("/press-detail", {
                                                item: item
                                            })}>Continue reading...</span></div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-4 mb-2"><span className="press_heading" onClick={() => props.history.push("/allpress-data")}>View All</span></div>
                <hr />
                {/* Asked Quesion component*/}
                <div className="mt-3">
                    <AskedQuestion />
                </div>

            </div>

        </>
    )
}

export default withRouter(HOC1(AboutUs));
