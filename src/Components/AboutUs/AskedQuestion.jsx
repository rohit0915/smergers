import React, { useEffect } from 'react'
import "./AboutUs.css";
import { Grid } from '@material-ui/core';
import ShowMoreText from "react-show-more-text";

function PressDetail(props) {

    const askedquestion = [
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
        { question: "Is SMERGERS an investment bank?", answer: "SMERGERS is an investment banking platform which aims to remove all the clutter and make quality introductions between businesses, investors, acquirers, lenders and advisors, extending beyond their geographical location." },
    ]


    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Grid className="Component_main_grid mt-2 p-3">
                <Grid item md={2}>
                    <div className="p-2">
                        <div className="Pivacy_heading">Frequently Asked Questions</div>
                    </div>
                </Grid>
                <Grid item md={10}>

                    <div>

                        <ShowMoreText
                            /* Default options */
                            lines={7}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="my-anchor-css-class"
                            onClick={executeOnClick}
                            expanded={false}
                            width={800}
                            truncatedEndingComponent={"... "}
                        >

                            {askedquestion.map((item, index) => (
                                <div>
                                    <div className="question_formatting">{item.question}</div><br />
                                    <div className="Privacy_content">{item.answer} </div><br />
                                </div>
                            ))}

                        </ShowMoreText>

                    </div>

                </Grid>
            </Grid>
        </>
    )
}

export default PressDetail;
