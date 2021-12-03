import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import HOC1 from "../../Common/HOC1.jsx";
import { Grid, Card, Button } from '@material-ui/core';
import profile from "./profile.png";
import { Pagination } from "antd";

function Dashboard(props) {
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(10);
    const latestActivity = [
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
        { content: "- Cryptocurrency in the form of first-generation NFT collectable. - Generate revenue through reselling of tokens. - We also focus on research and development of the technology related to.." },
    ]

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={4}>
                        <Card className="Card_shadow mt-1 ml-2 mr-2 ">
                            <div className="p-2 d-flex">
                                <span> <img src={profile} alt="" className="user_profile" /></span>
                                <span className="p-3">
                                    <div className="profilename_formatting">Jhon Doe</div>
                                    <div className="Privacy_content">JhonDoe@gmail.com</div>
                                    <div><Button
                                        variant="contained"
                                        className="profile_button"
                                        disabled={true}
                                    >No Active Profile</Button></div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2"><strong>Industries</strong></div>
                                </span>
                                <span>
                                    <div className="mr-2 Privacy_content">All industries</div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2"><strong>Industries</strong></div>
                                </span>
                                <span>
                                    <div className="mr-2 Privacy_content">All industries</div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2"><strong>Industries</strong></div>
                                </span>
                                <span>
                                    <div className="mr-2 Privacy_content"></div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2"><strong>Industries</strong></div>
                                </span>
                                <span>
                                    <div className="mr-2 Privacy_content">All industries</div>
                                </span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2 Privacy_content">
                                        <span><i class="fa fa-map-marker"></i></span>
                                        <span className="ml-2">Åland Islands</span>
                                    </div>
                                </span>
                                <span>
                                    <div className="mr-2"><span className="icon1"><i class="fa fa-linkedin"></i></span><span className="Footer_heading_Links ml-1">LinkedIn</span></div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2 Privacy_content">
                                        <span><i class="fa fa-calendar"></i></span>
                                        <span className="ml-2">Joined Oct.1, 2021</span>
                                    </div>
                                </span>
                                <span>
                                    <div className="mr-2"><span className="icon"><i class="fa fa-facebook"></i></span><span className="Footer_heading_Links ml-1">Facebook</span></div>
                                </span>
                            </div>

                            <div className="d-flex justify-content-between p-1">
                                <span>
                                    <div className="ml-2 Privacy_content">
                                        <span><i class="fa fa-link"></i></span>
                                        <span className="ml-2">Europe/Mariehamn (EEST +0300)</span>
                                    </div>
                                </span>
                                <span>
                                    <div className="mr-2"><span className="icon2"><i class="fa fa-google"></i></span><span className="Footer_heading_Links ml-1">Google</span></div>
                                </span>
                            </div>


                            <div className="text-center mt-2 mb-2">
                                <span className="press_heading"><i class="fa fa-pencil"></i></span>
                                <span className="press_heading ml-1" onClick={() => props.history.push("/edit-user-profile")}>Account Details</span>
                            </div>
                        </Card>
                    </Grid>

                    <Grid item md={8}>
                        <Card className="Card_shadow mt-1 ml-2 mr-2">

                            <div className="profilename_formatting border_botom p-3">Hii Jhon Doe,</div>
                            <div className="Privacy_content p-2">Welcome to SMERGERS, We help you acquire businesses, raise capital
                                for your company, find franchise partners, or realize value through a strategic sale.Our global
                                network of investors and businesses helps you successfully achieve your strategic objectives.</div>
                            <div className="p-2 text-center">
                                <Grid className="Component_main_grid p-3">
                                    <Grid item md={3}>
                                        <div className="Dashboard_icons">
                                            <span className="dahboard_icon"> <i class="fa fa-building"></i></span>
                                        </div>
                                        <div className="press_heading">Sell or Raise Funds for your Business</div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className="Dashboard_icons1">
                                            <span className="dahboard_icon"><i class="fa fa-money"></i></span>
                                        </div>
                                        <div className="press_heading">Acquire or Invest in a Business</div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className="Dashboard_icons2">
                                            <span className="dahboard_icon"> <i class="fa fa-sitemap"></i></span>
                                        </div>
                                        <div className="press_heading">Create a Franchise Profile</div>
                                    </Grid>
                                    <Grid item md={3}>
                                        <div className="Dashboard_icons3">
                                            <span className="dahboard_icon"><i class="fa fa-briefcase"></i></span>
                                        </div>
                                        <div className="press_heading">Register as an Advisor</div>
                                    </Grid>
                                </Grid>
                            </div>

                        </Card>

                        <div>
                            <Card className="Card_shadow mt-3 ml-2 mr-2">
                                <div className="p-2">
                                    <span className="latest_activity"><i class="fa fa-wifi"></i></span>
                                    <span className="profilename_formatting ml-3">Latest Activity</span>
                                </div>
                            </Card>
                        </div>

                        <div>
                            {latestActivity &&
                                latestActivity.length > 0 &&
                                latestActivity.slice(minValue, maxValue).map(item => (
                                    <Card className="Card_shadow mt-2 ml-2 mr-2">
                                        <div className="p-2">
                                            <div className="border_botom">
                                                <span>New activity in <strong>Gibraltar</strong> and <strong>Crypto</strong>  </span>
                                                <span className="ml-3"><i class="fa fa-clock"></i>   2 hours ago</span>
                                            </div>
                                            <div className="press_heading">For sale: Cryptocurrency in the form of NFT collectibles with a USD 8 million cap</div>

                                            <div>
                                                <span>Rating:</span>
                                                <span>9/10</span>
                                            </div>

                                            <div>
                                                <Grid className="Component_main_grid mt-2">
                                                    <Grid item md={4}>
                                                        <div className="press_images">
                                                            <img src="https://www.smergers.com/media/cache/58/b6/58b600b0e8a29ef4e0dbff8c96bf3f78.webp" alt="" className="dashboard_img_formatting" />
                                                        </div></Grid>
                                                    <Grid item md={8}>
                                                        <div className="ml-3 Privacy_content">
                                                            {item.content}
                                                        </div>

                                                        <div className="d-flex justify-content-between mt-2 mb-2">
                                                            <span>
                                                                <div className="profilename_formatting">Full Sale</div>
                                                                <div className="Privacy_content">USD 3.5 million</div>
                                                            </span>
                                                            <span>
                                                                <div className="profilename_formatting">Run Rate Revenue</div>
                                                                <div className="Privacy_content">USD 700 thousand @ 20 % EBITDA </div>
                                                            </span>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div className="mt-3 mb-3">
                                                <span className="profilename_formatting">Sent a proposal to</span>
                                                <span className="Privacy_content ml-2"> General Manager, Computer Software, Copenhagen, Individual Investor / Buyer</span>
                                            </div>

                                            <div className="text-right"><Button className="select_plan_btn button_login_decoration">Contact Business</Button></div>
                                        </div>
                                    </Card>
                                ))}

                            <Pagination
                                className="mt-3 mb-3"
                                defaultCurrent={1}
                                defaultPageSize={10}
                                onChange={handleChange}
                                total={500}
                            />
                        </div>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default HOC1(Dashboard);
