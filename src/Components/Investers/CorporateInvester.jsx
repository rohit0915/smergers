import React, { useState } from 'react';
import "./Invester.css";
import { Grid, Card, Button } from '@material-ui/core';
import HOC2 from "../../Common/HOC2.jsx";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';

//toolTip
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function CorporateInvester(props) {
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(12);
    const BusinessData = [{ heading: "CEO, Travel & Tourism" },
    { heading: "Invester, Travel & Tourism " },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    { heading: "CEO, Travel & Tourism" },
    ]

     const numEachPage = 12;
    const handleChange = (value) => {
        window.scrollTo(0, 0);

        setminValue((value - 1) * numEachPage)
        setmaxValue(value * numEachPage)

    };
    const [searchtitle, setsearchtitle] = useState("");

    const filterData = BusinessData.filter((event) => {
        return (
            event.heading.toLowerCase().indexOf(searchtitle.toLowerCase()) !== -1
        );
    });

    return (
        <>
            <div className="Business_Cards_margin mb-5">
                <div className="Pivacy_heading">Business Strategic Investors</div>
                <Grid className="Component_main_grid mt-2 p-2">
                    <Grid item md={3}>
                        <div className="p-2">
                            <label for="exampleInputEmail1">Search by Title</label>
                            <input type="text"
                                class="form-control"
                                placeholder="Search by title"
                                value={searchtitle}
                                onChange={(e) => {
                                    setsearchtitle(e.target.value)
                                }}
                            />
                        </div>
                    </Grid>

                    <Grid item md={9}></Grid>
                </Grid>
                <Grid className="Component_main_grid p-3">
                    {filterData &&
                        filterData.length > 0 &&
                        filterData.slice(minValue, maxValue).map(item => (
                            <Grid item md={4}>
                                <Card className="Card_shadow mt-3 ml-2 mr-2 p-2" onClick={() => props.history.push("/business-detail")}>
                                    <Grid className="Component_main_grid mt-2 p-2 border_botom">
                                        <Grid item md={2}>
                                            <div className="p-1">
                                                <img src="https://www.smergers.com/static/images/xuserimage.jpg.pagespeed.ic.rO7yBwOGY8.webp" alt="" className="press_img_formatting" />
                                            </div>
                                        </Grid>
                                        <Grid item md={10}>
                                            <div className="press_heading">{item.heading.length > 40 ? item.heading.substring(0, 40) + "..." : item.heading.substring(0, 40)}</div>
                                            <div className="card_bussiness_heading">Individual Buyer in Melta</div>
                                        </Grid>
                                    </Grid>


                                    <div className="d-flex justify-content-between">
                                        <BootstrapTooltip title="Official Mail"><span className="bussiness_card_style"><i class="fa fa-envelope mr-1"></i>Official mail</span></BootstrapTooltip>
                                        <BootstrapTooltip title="Phone"><span className="bussiness_card_style"><i class="fa fa-phone mr-1"></i>Phone</span></BootstrapTooltip>
                                        <BootstrapTooltip title="LinkedIn"><span className="bussiness_card_style"><i class="fa fa-linkedin mr-1"></i>LinkedIn</span></BootstrapTooltip>
                                        <BootstrapTooltip title="FaceBook"><span className="bussiness_card_style"><i class="fa fa-facebook mr-1"></i>Facebook</span></BootstrapTooltip>
                                        <BootstrapTooltip title="Google"><span className="bussiness_card_style"><i class="fa fa-google mr-1"></i>Google</span></BootstrapTooltip>
                                    </div>

                                    <div>
                                        <Grid className="Component_main_grid mt-2 p-2">
                                            <Grid item md={12}>
                                                <div className="Privacy_content"><strong>Intrest:</strong> Would be interested in business
                                                    opportunities in Europe.</div>
                                                <div className="Privacy_content mt-1"><strong>Background:</strong> We are into business valuations,
                                                    sell and buy side acquisitions from initial</div></Grid>
                                        </Grid>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <span><i class="fa fa-star mr-1"></i> 8.0/10</span>
                                        <span>Connected with <strong>1 Bussiness</strong></span>
                                    </div>

                                    <div className="d-flex justify-content-between card_rate_format mt-2">
                                        <span>Location</span>
                                        <span> Europe + 2 more</span>
                                    </div>

                                    <div className="d-flex justify-content-between card_rate_format mt-2">
                                        <span>Industries</span>
                                        <span>Application Software</span>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3 mb-4">
                                        <span className="bussiness_sales_price">Investment size<br />
                                            USD 7K-10K</span>
                                        <span> <Button className="select_plan_btn button_login_decoration">Send Proposal</Button></span>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
                <div className="mt-2 mb-2 text-center">
                    <Pagination
                        defaultCurrent={1}
                        defaultPageSize={numEachPage}
                        onChange={handleChange}
                        total={500}
                    />
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
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export default HOC2(CorporateInvester)
