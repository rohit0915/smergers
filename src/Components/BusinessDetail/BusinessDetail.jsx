import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
import "./BusinessDetail.css";
import { Grid, Card, Button } from '@material-ui/core';
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';

//react phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function BusinessDetail(props) {

    const bussinessoverview = [{ data: "The hotel consists of 6 double rooms and 2 apartments." },
    { data: "The rooms have private balconies and wide, royal bedrooms." },
    { data: "Our rooms have a very stylish and artistic interior with comfortable furniture and wide beds." },
    { data: "Room charges vary from 56 BGN for single rooms to 99 BGN for deluxe." },
    { data: "We have a total capacity of 25 guests." },
    { data: "There is a project with a residential permit for another floor and 4 more rooms which will add space for more guests around 8-10 people." },
    { data: "The hotel has a large parking lot, lobby bar, gas (heating), water softening system, all rooms have balconies, air conditioning systems are Mitsubishi." },
    { data: "High ratings on Booking (9.2), Google and other social platforms." },
    { data: "Parking is free and open 24 hours a day." },
    { data: "We have a personal website for online bookings and support." },

    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={8}>
                        <Card className="Card_shadow ml-3 mr-3 mt-1">
                            <div className="p-2">
                                <div className="press_heading">Hotel for Sale in Plovdiv, Bulgaria</div>
                                <div className="card_bussiness_heading">Highly rated hotel in Plovdiv which consists of 6 double rooms and 2 apartments.</div>
                                <hr />
                                <div className="press_images">
                                    <img src="https://www.smergers.com/media/businessphoto/63263-1632295418-c55d3507-e98d-47c2-9a84-8cbe292eaa74.png" alt="" className="press_img_formatting" />
                                </div>

                                <div>
                                    <Grid className="Component_main_grid mt-2 p-3">
                                        <Grid item md={6}>
                                            <div className="p-2">
                                                <table class="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Established</td>
                                                            <td>1-5 years</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Employees</td>
                                                            <td>2-5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Legal Entity</td>
                                                            <td>Dooley</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Reported Sales </td>
                                                            <td>Limited Liability Company</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Run Rate Sales</td>
                                                            <td>USD 47 thousand</td>
                                                        </tr>
                                                        <tr>
                                                            <td>EBITDA Margin</td>
                                                            <td>USD 70 thousand</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Industries</td>
                                                            <td>Hotels</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Locations</td>
                                                            <td>Polivdiv</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Local Time</td>
                                                            <td>8:35 AM Europe / Sofia</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Listed By</td>
                                                            <td>Business Owner / Director</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Status</td>
                                                            <td>Active</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Grid>
                                        <Grid item md={6}>
                                            <div className="p-2">
                                                <div className="card_bussiness_heading"> Overall Rating</div>
                                                <div> 8.4/10</div>
                                                <div className="card_bussiness_heading">Full Sale</div>
                                                <div>Asking Price:USD <strong className="text-info">900 thousand</strong> (Native Currency: BGN 1,500,000)</div>
                                                <div>Reason: Co-owner wants to retire, other owner is busy with other businesses as well.</div>
                                                <div> <i class="fa fa-check-square mr-2"></i>Includes physical assets worth USD <strong className="text-info">800 thousand</strong></div>
                                                <div><i class="fa fa-check-square mr-2"></i>Interested to connect with advisors</div>
                                                <div className="card_bussiness_heading mt-1">Name, Phone, Email</div>
                                                <div><i class="fa fa-clock"></i> Available after connect</div>
                                                <div className="card_bussiness_heading mt-1">Business Name</div>
                                                <div><i class="fa fa-clock"></i> Available after connect</div>
                                                <div className="card_bussiness_heading mt-1">User Verification</div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="bussiness_card_style"><i class="fa fa-envelope mr-2"></i>Official mail</span>
                                                    <span className="bussiness_card_style"><i class="fa fa-phone mr-2"></i>Phone</span>
                                                    <span className="bussiness_card_style"><i class="fa fa-linkedin mr-2"></i>LinkedIn</span>
                                                    <span className="bussiness_card_style"><i class="fa fa-facebook mr-2"></i>Facebook</span>
                                                    <span className="bussiness_card_style"><i class="fa fa-google mr-2"></i>Google</span>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>

                                <div className="p-2">
                                    <div className="card_bussiness_heading">Overall Rating</div>
                                    {bussinessoverview.map((item, index) => (
                                        <div className="mt-1">- {item.data}</div>
                                    ))}
                                </div>

                                <div className="p-2">
                                    <div className="card_bussiness_heading">Products & Services Overview</div>
                                    <div>Hotel and room services along with all hospitality services.</div>
                                </div>

                                <div className="p-2">
                                    <div className="card_bussiness_heading">Assets Overview</div>
                                    <div><p>The entire property with parking lot and lobby bar and all the rooms, furniture, and interior
                                        decor, which has current capacity for 25-26 people and
                                        permit for another floor construction for 4 additional rooms along with all the assets.</p>
                                        <p>Own website for booking and support.</p>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <div className="card_bussiness_heading">Facilities Overview</div>
                                    <div><p>Own property land (1 decare), built-up area (600 sq. meters).</p>
                                        <p>The hotel consists of 6 double rooms and 2 apartments. Total capacity - 25 people.</p>

                                        <p>The construction project with proper government/residential permit for another floor construction
                                            for 4 additional rooms.
                                            The hotel's large parking lot, lobby bar and outdoor sitting area with furniture.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4}>
                        <Card className="Card_shadow ml-3 mr-3 mt-1">
                            <div className="p-2">
                                <div><span className="contact_business_form">Contact Business</span><strong className="text-info">(one Time Registration)</strong></div>
                                <div>Fill your details below to contact this business</div>
                                <Grid className="Component_main_grid mt-2 p-2">
                                    <Grid item md={3}><label for="exampleInputEmail1">Full Name</label></Grid>
                                    <Grid item md={9}>
                                        <input type="text" class="form-control" placeholder="Full Name" /></Grid>
                                </Grid>

                                <Grid className="Component_main_grid mt-2 p-2">
                                    <Grid item md={3}><label for="exampleInputEmail1">Your Mobile Number</label></Grid>
                                    <Grid item md={9}>
                                        <PhoneInput
                                            className="React_phone_picker"
                                            country={'in'}
                                            countryCodeEditable={false}
                                        // value={}
                                        // onChange={phone => this.setState({ phone })}
                                        /></Grid>
                                </Grid>

                                <Grid className="Component_main_grid mt-2 p-2">
                                    <Grid item md={3}><label for="exampleInputEmail1">You are a(n)</label></Grid>
                                    <Grid item md={9}>
                                        <input type="text" class="form-control" placeholder="" /></Grid>
                                </Grid>

                                <Grid className="Component_main_grid mt-2 p-2">
                                    <Grid item md={3}><label for="exampleInputEmail1">Company you Work At</label></Grid>
                                    <Grid item md={9}>
                                        <input type="text" class="form-control" placeholder="" /></Grid>
                                </Grid>

                                <Grid className="Component_main_grid mt-2 p-2">
                                    <Grid item md={3}><label for="exampleInputEmail1">Designation</label></Grid>
                                    <Grid item md={9}>
                                        <input type="text" class="form-control" placeholder="" /></Grid>
                                </Grid>

                                <div className="mt-2">
                                    <div> <label for="exampleInputEmail1">Introduce yourself and leave a message to this business</label></div>
                                    <div><textarea class="form-control" rows="3"></textarea></div>
                                </div>

                                <div className="mt-2">
                                    <input type="checkbox" class="form-check-input" />
                                    <label class="form-check-label ml-3">I Acceept the <span className="text-info">Terms and Engagement</span></label>
                                </div>

                                <div className="mt-2 mb-2">
                                    <Button className="Business_contact_button button_login_decoration">Continue</Button>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>

                <hr />

                {/* Asked Quesion component*/}
                <div className="mt-3">
                    <AskedQuestion />
                </div>
            </div>
        </>
    )
}

export default withRouter(HOC1(BusinessDetail));
