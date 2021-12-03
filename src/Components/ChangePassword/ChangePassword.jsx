import React from 'react'
import "./ChangePassword.css";
import HOC1 from "../../Common/HOC1.jsx";
import { Button } from '@material-ui/core';
function ChangePassword() {
    return (
        <>
            <div className="content_margin mb-5">
                <div className="mt-3 mb-3">
                    <div className="Pivacy_heading">Change Password</div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Repeart Password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <Button className="select_plan_btn button_login_decoration">Change Password</Button>
                </div>
            </div>
        </>
    )
}

export default HOC1(ChangePassword);
