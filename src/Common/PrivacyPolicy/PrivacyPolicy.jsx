import React, { useEffect } from 'react'
import HOC1 from '../HOC1'
import { withRouter } from "react-router";
import "./PrivacyPolicy.css";
function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Privacy Policy</div>
                <div><p className="Privacy_content">SMERGERS is fully committed to protecting your confidential information. If you as a visitor choose
                    to register or submit information to this website, you agree to the use of such data in accordance with
                    this privacy policy. Please note that this website may contain links to other sites which
                    may not be governed by this privacy policy.</p>
                    <p className="Privacy_content">We collect and store confidential information including, but not limited to your name, email address,
                        telephone numbers, your company information, financial information, transactional information based
                        on your activities on the website, computer and connection information, statistics on page views,
                        traffic information, ad data, IP address, standard web log information and supplemental information
                        from third parties such as Google Analytics. If you would like to opt-out of such implementations
                        please stop using the website. Any confidential document shared with SMERGERS for professional
                        services will only be used for the intended purpose and will not be shared with any external party.</p>
                    <p className="Privacy_content">We may use your confidential information for the following purposes:
                        <br />
                        1. To display your profile/advertisement on the website to facilitate our services.<br />
                        2. To provide contact information to relevant parties after your approval.<br />
                        3. To derive and share industry knowledge including valuation multiples, profit margins, transaction structures, key drivers, challenges, etc.<br />
                        4. To send you information about SMERGERS, our products, our services, service updates, and promotional offers.<br />
                        5. To improve our services, collect fees, enforce our policies, and enforce our Terms and Conditions.<br />
                        6. To resolve disputes, respond to legal requirements, prevent potentially prohibited or illegal activities, and protect anyone's rights, property, and safety.</p>
                    <p className="Privacy_content">We might post testimonials on our website obtained from users' and these could include your name, company,
                        city, and other personal information. If you are a registered user representing a company, SMERGERS,
                        without disclosing your transaction details, may use your company name
                        and logo on its website, promotional materials, or other write-ups unless you request otherwise.</p>
                    <p className="Privacy_content">SMERGERS is fully committed to protecting your confidential information. But in unforeseen circumstances of technical failures or malfunctions
                        or security breaches, SMERGERS will not be responsible for any damage or loss resulting from it.</p>
                    <p className="Privacy_content">If SMERGERS undergoes a merger, acquisition or asset sale and your confidential information is part of
                        the transferred assets, the new privacy policy decided at the time of the transaction would govern your
                        confidential information. Any changes to the privacy policy
                        governing your information as a result of a transaction would be communicated on the website or by email.</p>
                    <p className="Privacy_content">When you receive the contact details of potential counterparties, the counterparty reserves the right
                        to remove their information from your database.</p>
                    <p className="Privacy_content">If you would like to close your account, please contact us and we shall process your request
                        at the earliest. We regularly clean our data and might close your account for inactivity or
                        for any other reason which may improve our website. We retain confidential information from
                        closed accounts to derive industry knowledge, comply with the law, prevent fraud,
                        collect any fees owed, resolve disputes and take other actions otherwise permitted by law.</p>
                    <p className="Privacy_content">We reserve the right to amend this Privacy Policy at any time and for any reason.</p>
                </div>
            </div>
        </>
    )
}

export default withRouter(HOC1(PrivacyPolicy));
