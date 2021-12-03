import React from 'react'
import "./Dashboard.css";
import HOC1 from "../../Common/HOC1.jsx";
import { Grid, Button } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function EditUserProfile(props) {
    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={3}>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item p-2">
                                <span className="press_heading" onClick={() => props.history.goBack()}><i class="fa fa-angle-left mr-2"></i>Back to Dashboard</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#contact" role="tab" aria-controls="contact">Contact & Billing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#deal" role="tab" aria-controls="deal">Deal Preferences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#email" role="tab" aria-controls="email">Email Preferences</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#password" role="tab" aria-controls="password">Change Password</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item md={9}>
                        <div className="tab-content">
                            {/* contact */}
                            <div className="tab-pane active" id="contact" role="tabpanel">

                                <div className="p-2 Outside_boder">
                                    <div className="profilename_formatting border_botom">Contact & Billing</div>
                                    <Grid className="Component_main_grid mt-2 ">
                                        <Grid item md={6}>
                                            <div className="form-group mr-2">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </Grid>
                                        <Grid item md={6}>
                                            <div>
                                                <label for="exampleInputEmail1">Mobile Numbr</label>
                                                <PhoneInput
                                                    className="React_phone_picker"
                                                    country={'in'}
                                                    countryCodeEditable={false}
                                                // value={}
                                                // onChange={phone => this.setState({ phone })}
                                                />
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid className="Component_main_grid mt-1 ">
                                        <Grid item md={6}>
                                            <div className="form-group mr-2">
                                                <label for="exampleInputEmail1">Location</label>
                                                <input type="text" className="form-control" placeholder="location" />
                                            </div>
                                        </Grid>
                                        <Grid item md={6}>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Time Zone</label>
                                                <input type="text" className="form-control" placeholder="time zone" />
                                            </div>
                                        </Grid>
                                    </Grid>

                                    <Grid className="Component_main_grid mt-1 ">
                                        <Grid item md={6}>
                                            <div className="form-group mr-2">
                                                <label for="exampleInputEmail1">Company Name</label>
                                                <input type="text" className="form-control" placeholder="Company Name" />
                                            </div>
                                        </Grid>
                                        <Grid item md={6}>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Designation</label>
                                                <input type="text" className="form-control" placeholder="Designation" />
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Address</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>

                                    <div>
                                        <Button className="Edit_Prfile_btn button_login_decoration">Save Changes</Button>
                                    </div>
                                </div>
                            </div>

                            {/* deal preferences */}
                            <div className="tab-pane" id="deal" role="tabpanel">
                                <div className="p-2 Outside_boder">
                                    <div className="profilename_formatting border_botom">Deal Preferences
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Location</label>
                                        <input type="text" className="form-control" placeholder="Location" />
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Industries</label>
                                        <input type="text" className="form-control" placeholder="Industries" />
                                    </div>

                                    <div>
                                        <Button className="Edit_Prfile_btn button_login_decoration">Save Changes</Button>
                                    </div>
                                </div>
                            </div>

                            {/* email preferences */}
                            <div className="tab-pane" id="email" role="tabpanel">
                                <div className="p-2 Outside_boder">
                                    <div className="profilename_formatting border_botom">Email Preferences
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Important Communication</label>
                                        <select class="form-control">
                                            <option>select</option>
                                            <option>Subscribed</option>
                                            <option>Unsubscribed</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Business Proposals
                                        </label>
                                        <select class="form-control">
                                            <option>select</option>
                                            <option>Real Time</option>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Fortnightly</option>
                                            <option>Monthly</option>
                                            <option>Quatarly</option>
                                            <option>Half Yearly</option>
                                            <option>Yearly</option>
                                            <option>No Email</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">New Opportunity Notifications</label>
                                        <select class="form-control">
                                            <option>select</option>
                                            <option>Real Time</option>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Fortnightly</option>
                                            <option>Monthly</option>
                                            <option>Quatarly</option>
                                            <option>Half Yearly</option>
                                            <option>Yearly</option>
                                            <option>No Email</option>
                                        </select>
                                    </div>

                                    <div>
                                        <Button className="Edit_Prfile_btn button_login_decoration">Save Changes</Button>
                                    </div>
                                </div>
                            </div>

                            {/* change Password */}
                            <div className="tab-pane" id="password" role="tabpanel">
                                <div className="p-2 Outside_boder">
                                    <div className="profilename_formatting border_botom">Change Password
                                    </div>

                                    <div className="mt-2 mb-2">
                                        <Button variant="outlined" className="Edit_Prfile_btn button_login_decoration" onClick={() => props.history.push("/set-password")}><i class="fa fa-pencil mr-2"></i>Change Password</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default HOC1(EditUserProfile);
