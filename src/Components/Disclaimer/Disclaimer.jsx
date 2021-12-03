import React, { useEffect } from 'react';
import "./Disclamier.css";
import HOC1 from "../../Common/HOC1.jsx";

function Disclaimer() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">Disclaimer</div>
                <div>
                    <p className="Privacy_content">The information contained on My Website (change this) website
                        (the "Service") is for general information purposes only. My Company
                        (change this) assumes no responsibility for errors or omissions in the contents on the Service.</p>
                    <p className="Privacy_content">In no event shall My Company (change this) be liable for any special,
                        direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an
                        of contract, negligence or other tort, arising out of or in connection with the use of the Service or
                        the contents of the Service. My Company (change this) reserves the right to make additions, deletions,
                        or modification to the contents on the Service at any time without prior notice. My
                        Company (change this) does not warrant that the website is free of viruses or other harmful components.</p>
                    <p className="Privacy_content">Past performance disclaimers are notably used by financial institutions,
                        investment firms, and trading platforms to warn potential and current clients that past performance
                        does not guarantee any future results: this is due to the volatile nature of the financial markets.</p>
                </div>

                <div className="Pivacy_heading">External links disclaimer</div>
                <div>
                    <p className="Privacy_content">My Website (change this) website may contain links to external websites
                        that are not provided or maintained by or in any way affiliated with My Company (change this) Please
                        note that the My Company (change this) does not guarantee the
                        accuracy, relevance, timeliness, or completeness of any information on these external websites..</p>
                    <p className="Privacy_content">It serves to protect them from lawsuits brought on by disappointed
                        clients that were expecting a good return on investment or specific results.</p>
                </div>

                <div className="Pivacy_heading">Fitness disclaimer</div>
                <div>
                    <p className="Privacy_content">This website offers health, fitness and nutritional information and is
                        designed for educational purposes only. You should not rely on this
                        information as a substitute for, nor does it replace, professional medical advice, diagnosis, or treatment.</p>
                    <p className="Privacy_content">It serves to protect them from lawsuits brought on by disappointed
                        clients that were expecting a good return on investment or specific results.</p>
                </div>

                <div className="Pivacy_heading">Fair Use Disclaimer</div>
                <div>
                    <p className="Privacy_content">The law has made it acceptable, under very specific circumstances and
                        for very specific purposes
                        only, for one to use someone else’s copyrighted work without first requiring their consent.</p>
                    <p className="Privacy_content">The following purposes are explicitly considered to be “fair use” under
                        Title 17, Section 107 of the United States Code and thus should not be considered copyright
                        infringement:</p>

                    <ul type="disc">
                        <li>Criticism</li>
                        <li>Comment</li>
                        <li>News reporting</li>
                        <li>Research</li>
                    </ul>

                    <p className="Privacy_content">Fair use is not limited to the above and is to be considered on a case by
                        case basis.</p>

                    <p className="Privacy_content">website fair use policy specifies that the copyrighted material made available
                        is in the effort of advancing the understanding of the credit union industry and issues.</p>
                </div>

                <div className="Pivacy_heading">Copyright Disclaimer Notice</div>
                <div>
                    <p className="Privacy_content">Conversely, a copyright disclaimer is used to protect the ownership of
                        your work; you would include it on your website to warn users that
                        the content materials are your property and should not be reproduced without your authorization.</p>
                    <p className="Privacy_content">Your copyright notice doesn’t have to be very long, as long as it contains:</p>

                    <ul type="disc">
                        <li>The copyright symbol</li>
                        <li>The name of your company/owner of the copyrighted work</li>
                        <li>The year of publication</li>
                        <li>The mention “All Rights Reserved” or “Some Rights Reserved”, depending on which rights you wish to retain</li>
                    </ul>

                    <p className="Privacy_content">This is the simple copyright statement that appears on the social media
                        management platform Hootsuite’s homepage.</p>

                    <p className="Privacy_content">YWhile having such a disclaimer is generally not essential for your
                        work to be protected by copyright, it is an easy step to take to put everyone on notice that
                        the content of your website is proprietary and should not be used without your permission.</p>
                </div>
            </div>
        </>
    )
}

export default HOC1(Disclaimer);
