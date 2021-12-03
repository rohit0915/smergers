import React, { useEffect } from 'react'
import HOC1 from '../HOC1'
import { withRouter } from "react-router";
import "./PrivacyPolicy.css";
function Terms() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Terms of Use</div>
                <div><p className="Privacy_content">By using our website (www.smergers.com) or our services, you are agreeing to the terms
                    and conditions provided here.</p>
                    <p className="Privacy_content">Our website has been designed to connect buyers/investors and sellers of small and
                        medium-sized businesses through the process of automated searching, shortlisting and contacting prospects.</p>
                    <p className="Privacy_content">You should contact a party on the website only if you have a genuine interest in the offering advertised
                        on the website by the party and should not contact the person for any other purpose.</p>
                    <p className="Privacy_content">No part of the website and no content may be copied, reproduced,
                        republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed
                        in any way to any other computer, server, website or another medium for publication
                        or distribution or for any commercial purpose, without SMERGERS’ express prior written consent.</p>
                    <p className="Privacy_content">You may not use any "deep-link", "page-scrape", "robot", "spider" or other
                        automatic devices, program, algorithm or methodology, or any similar or equivalent manual process, to
                        access, acquire, copy or monitor any portion of the website or any content, materials, documents or information.</p>
                    <p className="Privacy_content">Profile advertisement details and other materials posted on our sites
                        are not intended to amount to any form of investment advice from SMERGERS. SMERGERS is not a broker or the agent of any user,
                        and SMERGERS does not partake in any kind of negotiations or discussions between the users.</p>
                    <p className="Privacy_content">You hereby agree to indemnify SMERGERS (who shall have no duty to mitigate its loss) in full and on-demand
                        and keep it so indemnified against all claims, demands, actions, proceedings, and all direct and indirect
                        damages, losses, costs, and expenses (including without limitation legal and other professional advisers'
                        fees, economic loss, loss of profit, future revenue, reputation, goodwill, anticipated savings) and any
                        consequential loss made against or incurred or suffered by SMERGERS and whether wholly or in part
                        resulting directly or indirectly from any claim that the content of any material uploaded or posted onto this
                        website infringes the copyright, trademark or other intellectual property rights of any third party.</p>
                    <p className="Privacy_content">You agree to indemnify SMERGERS against all claims, demands, actions, proceedings, costs, losses,
                        expenses or damages it may incur howsoever arising whether direct, indirect or consequential as a
                        result of the advertisement you place on the website.</p>
                    <p className="Privacy_content">If you are advertising in the capacity of a broker, agent or any other form of intermediary, you should
                        have the full authority to advertise the business/business opportunity on the website from the owner.</p>

                    <p className="Privacy_content">SMERGERS reserves the right to decide the index order in which listings are displayed on the website.</p>
                    <p className="Privacy_content">You agree that any disputes and/or differences if any shall be governed by the Laws of India and the exclusive venue for all
                        actions related to or arising out of this engagement shall be the Courts of Bangalore, India.</p>
                    <p className="Privacy_content">You hereby, unconditionally and irrevocably confirm that you have read terms and conditions and
                        agree to abide by them.</p>
                </div>
            </div>
        </>
    )
}

export default withRouter(HOC1(Terms));
