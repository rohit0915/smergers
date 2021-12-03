import React, { useState, useEffect } from 'react'
import HOC1 from '../HOC1'
import { withRouter } from "react-router";
import { Card, Grid, Button } from '@material-ui/core';
import "./ContactUs.css";

function Terms() {
    const [email, setemail] = useState("");
    const [question, setquestion] = useState("")
    const [blankcheck, setblankcheck] = useState(false);

    const SubmitDetails = () => {
        if (email === "" || question === "") {
            setblankcheck(true)
            return;
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Contact Us</div>
                <div>For general enquiries and technical support send your query using the form below.</div>
                <Card className="card_border mt-2">
                    <div className="p-5">
                        <Grid className="Component_main_grid">
                            <Grid item md={8}>
                                {blankcheck && <div class="alert alert-danger" role="alert">
                                    Please Fill the Email andd Query
                                </div>}

                                <div className="ml-2 mr-2">
                                    <div><input type="email" class="form-control" placeholder="Your email address"
                                        value={email}
                                        onChange={(e) => {
                                            setblankcheck(false);
                                            setemail(e.target.value)
                                        }}
                                    /></div>

                                    <div className="mt-2"><textarea class="form-control" placeholder="Type your Question here and Submit" rows="2"
                                        value={question}
                                        onChange={(e) => {
                                            setblankcheck(false);
                                            setquestion(e.target.value)
                                        }}
                                    ></textarea></div>

                                    <div className="mt-2 text-right"><Button className="contact_submit" onClick={SubmitDetails}>Submit</Button></div>

                                    <div className="text-center Contact_Full_address">We revert to most queries within 2 business days.</div>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="cards_margins_both_side">
                                    <div className="contact_address">Company</div>
                                    <div className="Contact_Full_address">SMERGERS Online Services Pvt Ltd,<br />
                                        Helios Business Park,<br />
                                        Level 10, Wing C, 150 Outer Ring Road,<br />
                                        Kadubeesanahalli, Varthur Hobli,<br />
                                        Bangalore, India - 560103<br />
                                        CIN: U74900KA2015PTC082128</div>

                                    <div className="contact_address mt-2">Social</div>
                                    <div><span className="icon"><i class="fa fa-facebook"></i></span><span className="Footer_heading_Links ml-1">Facebook</span></div>
                                    <div><span className="icon1"><i class="fa fa-linkedin"></i></span><span className="Footer_heading_Links ml-1">LinkedIn</span></div>
                                    <div><span className="icon2"><i class="fa fa-youtube"></i></span><span className="Footer_heading_Links ml-1">Youtube</span></div>
                                    <div><span className="icon3"><i class="fa fa-twitter"></i></span><span className="Footer_heading_Links ml-1">Twitter</span></div>
                                    <div><span className="icon4"><i class="fa fa-instagram"></i></span><span className="Footer_heading_Links ml-1">Instagram</span></div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default withRouter(HOC1(Terms));
