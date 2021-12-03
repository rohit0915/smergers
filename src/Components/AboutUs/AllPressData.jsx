import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import "./AboutUs.css";
import { Grid, Card } from '@material-ui/core';

function AllPressData(props) {

    const pressdata = [
        { heading: "India Today Aspire - How to Bootstrap Your Start-Up? - Vishal Devanath, Founder,Vishal Devanath, FounderVishal Devanath, Founder", data: "Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post. Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post.Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post." },
        { heading: "Economic Times - Buyer interest in SME space has gone up post-Covid: Vishal Devanath,", data: "Deal sizes in SME space are at least 25-30% down compared to pre-Covid times and this is a good time to pick up businesses to expand offering Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },
        { heading: "Hindu Business Line - SMERGERS reports a 40 percent increase in business listings related,", data: "Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },
        { heading: "India Today Aspire - How to Bootstrap Your Start-Up? - Vishal Devanath, Founder,Vishal Devanath, FounderVishal Devanath, Founder", data: "Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post. Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post.Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post." },
        { heading: "Economic Times - Buyer interest in SME space has gone up post-Covid: Vishal Devanath,", data: "Deal sizes in SME space are at least 25-30% down compared to pre-Covid times and this is a good time to pick up businesses to expand offering Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },
        { heading: "Hindu Business Line - SMERGERS reports a 40 percent increase in business listings related,", data: "Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },
        { heading: "India Today Aspire - How to Bootstrap Your Start-Up? - Vishal Devanath, Founder,Vishal Devanath, FounderVishal Devanath, Founder", data: "Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post. Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post.Vishal Devanath, Founder, SMERGERS shares tips on how to bootstrap your startup.Read more on India Today's Instagram post." },
        { heading: "Economic Times - Buyer interest in SME space has gone up post-Covid: Vishal Devanath,", data: "Deal sizes in SME space are at least 25-30% down compared to pre-Covid times and this is a good time to pick up businesses to expand offering Even smaller players are finding it difficult to sustain. SMERGERS, a merger and acquisition portal for SMEs, has seen a rise of 40 per." },

    ]

    const semermedia = [
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },
        { heading: "SME Finance Forum", content: "For the World's 460 Million SMEs, FinTech Firm SMERGERS to Become a One-stop Investment Bank" },

    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={9}>
                        {pressdata.map((item, index) => (
                            <Card className="Card_shadow mt-3 ml-3 mr-3">
                                <div className="p-2">
                                    <div className="press_heading" onClick={() => props.history.push("/press-detail", {
                                        item: item
                                    })}>{item.heading.substring(0, 70) + "..."}</div>
                                    <div className="Privacy_content">July 29,2021</div>
                                    <hr />

                                    <div>
                                        <Grid className="Component_main_grid mt-2">
                                            <Grid item md={3}>
                                                <div className="press_images">
                                                    <img src="https://www.smergers.com/media/uploads/Nx550xindiatodayaspirecollage.jpg.pagespeed.ic.j-dKIo_b2l.webp" alt="" className="press_img_formatting" />
                                                </div></Grid>
                                            <Grid item md={9}>
                                                <div className="ml-3 Privacy_content">{item.data.substring(0, 100) + "..."}</div>
                                                <div className="text-left ml-3 mt-2 mb-2" ><span className="press_heading" onClick={() => props.history.push("/press-detail", {
                                                    item: item
                                                })}>Continue reading...</span></div>
                                            </Grid>
                                        </Grid>
                                    </div>


                                </div>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item md={3}>
                        <Card className="Card_shadow mt-3">
                            <div className="p-2">
                                <div>SMERGERS in Media</div>
                                <div>
                                    {semermedia.map((item, index) => (
                                        <Grid className="Component_main_grid mt-3">
                                            <Grid item md={3}>
                                                <div className="ml-3 mr-3">
                                                    <img src="https://www.smergers.com/media/articlepics/42xNxSMEFinanceLogo.png.pagespeed.ic.wH7hRYyizl.webp" alt="" className="press_img_formatting" />
                                                </div>
                                            </Grid>
                                            <Grid item md={7}>
                                                <div className="click_link">{item.heading}</div>
                                                <div><div className="pressdetail_cards_content">{item.content.substring(0, 70) + "..."}</div></div>
                                            </Grid>
                                        </Grid>))}
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default withRouter(HOC1(AllPressData));
