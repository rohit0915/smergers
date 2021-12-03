import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import "./AboutUs.css";
import { Grid, Card } from '@material-ui/core';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";

import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from "react-share";

function PressDetail(props) {
    let data = props.location.state.item.data;
    let heading = props.location.state.item.heading;
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
                        <Card className="Card_shadow ml-3 mr-3">
                            <div className="p-2">
                                <div className="press_heading">{heading}</div>
                                <div className="Privacy_content">July 29,2021</div>
                                <hr />
                                <div className="press_images">
                                    <img src="https://www.smergers.com/media/uploads/Nx550xindiatodayaspirecollage.jpg.pagespeed.ic.j-dKIo_b2l.webp" alt="" className="press_img_formatting" />
                                </div>
                                <div className="ml-3 Privacy_content">{data}</div>

                                <div className="mt-2 mb-2">
                                    Share this with your network
                                </div>
                                <div className="d-flex">
                                    <span>
                                        <FacebookShareButton url="https://youtu.be/0Xq5ujRgVXI" hashtag="#React">
                                            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                                        </FacebookShareButton>
                                    </span>
                                    <span className="ml-5">
                                        <LinkedinShareButton url="https://youtu.be/0Xq5ujRgVXI" hashtag="#React">
                                            <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
                                        </LinkedinShareButton>
                                    </span>
                                    <span className="ml-5">
                                        <TwitterShareButton url="https://youtu.be/0Xq5ujRgVXI" hashtag="#React">
                                            <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                                        </TwitterShareButton>
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={3}>
                        <Card className="Card_shadow">
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

export default withRouter(HOC1(PressDetail));
