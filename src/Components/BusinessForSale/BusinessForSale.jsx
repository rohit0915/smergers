import React, { useState } from 'react';
import "./BusinessForSale.css";
import { Grid, Card, Button } from '@material-ui/core';
import HOC2 from "../../Common/HOC2.jsx";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';

//toolTip
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

function BusinessForSale(props) {
    const [minValue, setminValue] = useState(0);
    const [maxValue, setmaxValue] = useState(12);
    const BusinessData = [{ heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "High end and top-quality beauty salon in Burton ", location: "Delhi" },
    { heading: "Industrial Machinery Company Investment", location: "Delhi" },
    { heading: "Industrial Machinery Company Investment", location: "UP" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    { heading: "Industrial Machinery Company Investment", location: "Meerut" },
    ]

     const numEachPage = 12;
    const handleChange = (value) => {
        window.scrollTo(0, 0);

        setminValue((value - 1) * numEachPage)
        setmaxValue(value * numEachPage)

    };
    const [searchtitle, setsearchtitle] = useState("");
    const [searchlocation, setsearchlocation] = useState("");

    const filterData = BusinessData.filter((event) => {
        return (
            event.heading.toLowerCase().indexOf(searchtitle.toLowerCase()) !== -1 &&
            event.location.toLowerCase().indexOf(searchlocation.toLowerCase()) !== -1
        );
    });

    return (
        <>
            <div className="Business_Cards_margin mb-5">
                <div className="Pivacy_heading">Business For Sale</div>
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

                    <Grid item md={3}>
                        <div className="p-2">
                            <label for="exampleInputEmail1">Search by Location</label>
                            <input type="text"
                                class="form-control"
                                placeholder="Search by location"
                                value={searchlocation}
                                onChange={(e) => {
                                    setsearchlocation(e.target.value)
                                }}
                            />

                        </div>
                    </Grid>
                   
                    <Grid item md={6}></Grid>
                </Grid>
                <Grid className="Component_main_grid p-3">
                    {filterData &&
                        filterData.length > 0 &&
                        filterData.slice(minValue, maxValue).map(item => (
                            <Grid item md={4}>
                                <Card className="Card_shadow mt-3 ml-2 mr-2 p-2" onClick={() => props.history.push("/business-detail")}>
                                    <div className="press_heading">{item.heading}</div>
                                    <div className="card_bussiness_heading">German based high tech growing machinery production company for</div>
                                    <div className="d-flex justify-content-between">
                                        <BootstrapTooltip title="Official Mail"><span className="bussiness_card_style"><i class="fa fa-envelope mr-1"></i>Official mail</span></BootstrapTooltip>
                                        <BootstrapTooltip title="Phone"><span className="bussiness_card_style"><i class="fa fa-phone mr-1"></i>Phone</span></BootstrapTooltip>
                                        <BootstrapTooltip title="LinkedIn"><span className="bussiness_card_style"><i class="fa fa-linkedin mr-1"></i>LinkedIn</span></BootstrapTooltip>
                                        <BootstrapTooltip title="FaceBook"><span className="bussiness_card_style"><i class="fa fa-facebook mr-1"></i>Facebook</span></BootstrapTooltip>
                                        <BootstrapTooltip title="Google"><span className="bussiness_card_style"><i class="fa fa-google mr-1"></i>Google</span></BootstrapTooltip>
                                    </div>

                                    <div>
                                        <Grid className="Component_main_grid mt-2 p-2">
                                            <Grid item md={9}>
                                                <div className="Privacy_content">- The hotel consists of 6 double rooms and 2 apartments. - The rooms
                                                    have private balconies and wide, royal bedrooms. - Our</div></Grid>
                                            <Grid item md={3}>
                                                <div>
                                                    <img src="https://www.smergers.com/media/cache/1f/84/1f84bd9332f00165a425b7c7bbef924f.webp.pagespeed.ce.bPf_e53SmX.webp" alt="" className="business_image_style" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div>
                                        <span><i class="fa fa-star mr-1"></i> 8.0</span>
                                        <span className="ml-5"><i class="fa fa-map-marker mr-1"></i>{item.location}</span>
                                    </div>

                                    <div className="d-flex justify-content-between card_rate_format mt-2">
                                        <span>Run Rate Sales <i class="fa fa-info-circle"></i> Meerut</span>
                                        <span>USD 70 thousand</span>
                                    </div>

                                    <div className="d-flex justify-content-between card_rate_format mt-2">
                                        <span>EBITDA Margin <i class="fa fa-info-circle"></i> Meerut</span>
                                        <span>40%</span>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3 mb-4">
                                        <span className="bussiness_sales_price">Business For sale<i class="fa fa-info-circle"></i><br />
                                            USD 700K</span>
                                        <span> <Button className="select_plan_btn button_login_decoration">Contact Business</Button></span>
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

export default HOC2(BusinessForSale)
