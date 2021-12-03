import React, { useEffect } from 'react'
import { Grid, Button } from '@material-ui/core';
import "./Home.css";
import GoogleMapReact from "google-map-react";
import HOC from "../../Common/HOC.jsx";
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';

const defaultProps = {
    center: { lat: 28.7041, lng: 77.1025 },
    zoom: 12,
};

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div className="HomePageImage">
                <span className="image_message">Thousands of business owners connect with investors &
                    advisors on SMERGERS to franchise or sell their business

                </span>
                <div className="Main_Heading_Get_started">
                    <span className="Home_get_started pt-2">
                        Get Started</span>

                    <Grid className="Component_main_grid mt-2 p-3">
                        <Grid item md={2}>
                            <div className="get_sarted_data">Sell your Business?</div>
                            <div><Button className="btn_color_blue mb-2">Sell your Business</Button></div>
                        </Grid>
                        <Grid item md={2}>
                            <div className="get_sarted_data">Finance your Business?</div>
                            <div><Button className="btn_color_yellow mb-2">Finance your Business</Button></div>
                        </Grid>
                        <Grid item md={2}>
                            <div className="get_sarted_data">Buy a Business?</div>
                            <div><Button className="btn_color_green mb-2">Buy a Business</Button></div>
                        </Grid>
                        <Grid item md={2}>
                            <div className="get_sarted_data">Invest in a Business?</div>
                            <div><Button className="btn_color_blue mb-2">Invest in a Business</Button></div>
                        </Grid>
                        <Grid item md={2}>
                            <div className="get_sarted_data">Value your Business?</div>
                            <div><Button className="btn_color_yellow mb-2">Value your Business</Button></div>
                        </Grid>
                        <Grid item md={2}>
                            <div className="get_sarted_data">Register as Advisor?</div>
                            <div><Button className="btn_color_green mb-2">Register as Advisor</Button></div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="text-center mt-3">
                <span className="why_semers mt-3">Why SMERGERS?</span>
                <div className="whysemers_content"><strong>70,500+</strong> pre-screened businesses and investors from <strong>900+</strong> industries,
                    <strong>170+</strong><br /> countries, investment size from <strong>USD 15 thousand to 50  </strong></div>


                <div className="mt-3 mb-3 cards_margins_both_side">
                    <div style={{ height: "70vh", width: "100%" }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: "AIzaSyC6teBAs0VTYf_3jk8HnmmJP99hc3fd8Rw",
                            }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        ></GoogleMapReact>
                    </div>
                </div>
                <Grid className="Component_main_grid mt-5 p-3">
                    <Grid item md={3}>
                        <div className="icon_color_pink"><i class="fa fa-check-square"></i></div>
                        <div className="whysemers_cardcontent mt-1">Pre-approved</div>
                        <div className="mt-2 whysemers_card_data">Every business, investor, buyer and advisor profile on SMERGERS
                            is pre-screened by our analysts</div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="icon_color_pink"><i class="fa fa-lock"></i></div>
                        <div className="whysemers_cardcontent mt-1">Confidential</div>
                        <div className="mt-2 whysemers_card_data">Your privacy is of utmost importance to us. Selectively disclose identity
                            to interested and genuine parties</div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="icon_color_pink"><i class="fa fa-signal"></i></div>
                        <div className="whysemers_cardcontent mt-1">Fair Valuation</div>
                        <div className="mt-2 whysemers_card_data">Compare and benchmark your business with 100s of private companies in your
                            location from the same industry</div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="icon_color_pink"><i class="fa fa-globe"></i></div>
                        <div className="whysemers_cardcontent mt-1">Global Network</div>
                        <div className="mt-2 whysemers_card_data">Connect with businesses, investors, franchises, buyers and financial
                            advisors across the globe</div>
                    </Grid>
                </Grid>
            </div>

            <hr />

            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={7}>
                        <div class="container text-center my-3">
                            <div class="row mx-auto my-auto">
                                <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                    <div class="carousel-inner w-100" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=1" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=2" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=3" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=4" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Grid>
                    <Grid item md={5}>

                        <div className="Heading_formatting">Businesses for Sale on SMERGERS</div>
                        <div className="mt-2 mb-3 content_cards">Explore pre-screened businesses for sale from over 100+
                            countries and across 900+ different industries. You can find businesses looking for full sale, raising
                            capital through an investment or seeking business loan. Register as an Investor to buy a
                            business or invest in them.</div>

                        <div><Button className="cards_button mb-2">View All Businesses</Button></div>
                    </Grid>
                </Grid>
            </div>

            <hr />
            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={5}>

                        <div className="Heading_formatting">Investors & Business Buyers on SMERGERS</div>
                        <div className="mt-2 mb-3 content_cards">Get started by introducing yourself to an investor or a
                            business buyer and send them your proposal today. Members on SMERGERS
                            include Individuals, Corporates, Private Equity Firms, VC Firms, Family Offices, and Banks.</div>

                        <div><Button className="cards_button mb-2">View All Investors</Button></div>
                    </Grid>
                    <Grid item md={7}>
                        <div class="container text-center my-3">
                            <div class="row mx-auto my-auto">
                                <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                    <div class="carousel-inner w-100" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=1" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=2" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=3" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=4" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <hr />

            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={7}>
                        <div class="container text-center my-3">
                            <div class="row mx-auto my-auto">
                                <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                    <div class="carousel-inner w-100" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=1" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=2" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=3" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=4" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Grid>
                    <Grid item md={5}>

                        <div className="Heading_formatting">Brands on SMERGERS</div>
                        <div className="mt-2 mb-3 content_cards">Partner with world class brands and grow together. Register
                            as an Investor to get in touch directly with brand owners and take up franchises,
                            distributorships and sales agencies.</div>

                        <div><Button className="cards_button mb-2">View All Brands</Button></div>
                    </Grid>
                </Grid>
            </div>

            <hr />
            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={5}>

                        <div className="Heading_formatting">Financial Advisors on SMERGERS</div>
                        <div className="mt-2 mb-3 content_cards">Join our list of top notch advisors who are experts in their
                            respective domains and locations. Advisors on SMERGERS include Business Brokers, M&A advisors, Investment
                            Banks and Merchant Banks. These advisors are ready to work
                            with a wide spectrum of businesses irrespective of size, caliber and growth stage.</div>

                        <div><Button className="cards_button mb-2">View All Advisor</Button></div>
                    </Grid>
                    <Grid item md={7}>
                        <div class="container text-center my-3">
                            <div class="row mx-auto my-auto">
                                <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                    <div class="carousel-inner w-100" role="listbox">
                                        <div class="carousel-item active">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=1" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=2" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=3" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="col-md-4">
                                                <div class="card card-body">
                                                    <img class="img-fluid" src="http://placehold.it/380?text=4" alt="" />
                                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <hr />
            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={6}>

                        <div className="Heading_formatting">Business Valuation Calculator</div>
                        <div className="mt-2 mb-3 content_cards">At SMERGERS, we define Business Valuation as a technique used
                            to capture the true value of a business based on similar comparable companies. Our comparable data
                            includes publicly trading companies across all stock exchanges in the world and private transactions
                            of thousands of small businesses on SMERGERS, which makes our valuation estimate as precise as it can get.
                            Curious to know the valuation of your business? Try our simple, yet one of the most
                            effective, online valuation calculators out there for free.</div>

                        <div><Button className="cards_button mb-2">Try Valuation Tool</Button></div>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://www.smergers.com/static/images/features/xvaluation.png.pagespeed.ic.dYJr-5VXXv.webp" alt="" className="cards_image_formatting" />
                    </Grid>
                </Grid>
            </div>

            <hr />
            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={6}>
                        <img src="https://www.smergers.com/static/images/features/xindustry-watch-min.png.pagespeed.ic.uLVkDwA6Y5.webp" alt="" className="cards_image_formatting" />
                    </Grid>
                    <Grid item md={6}>

                        <div className="Heading_formatting">Industry Watch</div>
                        <div className="mt-2 mb-3 content_cards">SMERGERS Industry Watch offers a bird’s eye view of traditional
                            and sunrise sectors which includes Finance, IT, Auto, Media, Engineering, Pharma, Food & Beverage,
                            Healthcare, E-commerce, Internet companies and many other industries that are at an inflection point
                            and transforming the global economy. Our infographics are easy to comprehend as we
                            present you with only the most relevant metrics in a clutter free and visually appealing format.</div>

                        <div><Button className="cards_button mb-2">Explore Industry Watch</Button></div>
                    </Grid>

                </Grid>
            </div>

            <hr />
            <div className="cards_margins_both_side mt-5 mb-5">
                <Grid className="Component_main_grid ">
                    <Grid item md={6}>

                        <div className="Heading_formatting">SMERGERS Guide</div>
                        <div className="mt-2 mb-3 content_cards">Our experience in the industry, collaborating and working
                            with small business owners & investors across the globe, led us to create SMERGERS Guide for the
                            benefit of small business sellers and buyers.Consider this your go-to resource when
                            buying and selling a small business.</div>

                        <div><Button className="cards_button mb-2">Explore SMERGERS guide</Button></div>
                    </Grid>
                    <Grid item md={6}>
                        <img src="https://www.smergers.com/static/images/features/xguide-min.png.pagespeed.ic.6PKLhk4bnX.webp" alt="" className="cards_image_formatting" />
                    </Grid>
                </Grid>
            </div>

            <hr />

            {/* Asked Quesion component*/}
            <div className="mt-3">
                <AskedQuestion />
            </div>
        </div>
    )
}

export default HOC(Home);
