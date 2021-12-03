import React, { useEffect } from 'react'
import HOC1 from '../HOC1'
import { withRouter } from "react-router";
import "./PrivacyPolicy.css";
function RefundPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Refund Policy</div>
                <div>
                    <p className="refund_policy_heading">SMERGERS will refund full cost of your order if we fail to deliver our services
                        within the stipulated amount of time as provided in the chart below:</p>
                    <div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Stipulated Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Business Profile Plans, Investor/Buyer Profile Plans, and Advisor Profile Plans</td>
                                    <td>Profile to be activated within 2 business days, provided complete information and verification details
                                        are provided by the user. Refund not applicable if the
                                        user provides wrong information or delays providing required information to complete the profile.</td>
                                </tr>
                                <tr>
                                    <td>Introduction Credits</td>
                                    <td>Business introductions which do not respond to you or are unavailable can be reported on our website
                                        or over email. After validating the same, these introduction
                                        credits will be re-credited back to your account for connecting with alternate businesses.</td>
                                </tr>
                                <tr>
                                    <td>Information Memorandum and Business Valuation Model</td>
                                    <td> Valuation Model First version of Report to be submitted to the client within 25 business days from
                                        date of receiving complete information and payment from the client. Refund not applicable if the
                                        client provides wrong information or delays providing required information to complete the process.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="refund_policy_heading">SMERGERS will refund your order post a 5% deduction towards transaction
                        charges under the following circumstances:</p>
                    <p className="Privacy_content">SMERGERS reserves the right to reject, suspend, edit, or delete a profile
                        even after submission of the required verification documents by the user, if we believe, in our opinion,
                        that such steps will improve the quality of the website. In such cases, where SMERGERS is unable to
                        approve your profile or retain your profile on
                        our website, we provide a refund on a pro-rata basis post deduction of a 5% transaction charge.</p>
                    <p className="refund_policy_heading">We apologize for any inconvenience, but we will not be providing a
                        refund under the following circumstances:</p>
                    <div>
                        <p className="Privacy_content">- SMERGERS neither guarantee introductions nor deal closures and we do
                            not issue refunds for the same. We recommend you to use our free plans and go through our
                            services and processes, as and when available, to try our services before subscribing to a paid plan
                        </p>
                        <p className="Privacy_content">- SMERGERS will also not be providing any refunds if user changes their
                            mind or does not use their profile or fails to furnish verification proof to back its claims.</p>
                        <p className="Privacy_content">- SMERGERS may terminate an account if we, in our opinion, believe that
                            the user is abusing SMERGERS in any way, intentionally furnishes false information, or has previously
                            failed to pay Finder’s Fee to SMERGERS. In such a situation, SMERGERS shall be entitled to retain the entire
                            fees paid the user towards damages and user shall not be entitled to seek a refund of the same.</p>

                    </div>

                    <p className="refund_policy_heading">If you are eligible for a refund based on the above terms, kindly follow the below
                        process to raise a refund request:</p>
                    <p className="Privacy_content">All refund requests need to be sent over an email to info@smergers.com from
                        the registered email address of the user. Please state the invoice number, payment date, amount and reason
                        for the refund request. We will review the case in 3 business days and issue a refund, if applicable, as
                        per our refund policy. Depending on
                        the mode of payment it may take between 5-15 days for the credit to reflect in your card or account.</p>

                </div>
            </div>
        </>
    )
}

export default withRouter(HOC1(RefundPolicy));
