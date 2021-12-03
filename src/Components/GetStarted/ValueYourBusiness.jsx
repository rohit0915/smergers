import React, { useEffect } from 'react'
import HOC1 from "../../Common/HOC1.jsx";
import { withRouter } from "react-router";
//import { Grid, Card, Button } from '@material-ui/core';
import AskedQuestion from '../AboutUs/AskedQuestion.jsx';
import "./GetStarted.css";
function ValueYourBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <div className="Pivacy_heading">How to value a Business</div>

                <div className="value_your_bussiness_heading mt-4">What is Business Valuation?</div>
                <p className="Privacy_content">At SMERGERS, we define Business Valuation as a technique used to capture
                    the true value of the business. Common approaches to business valuation include
                    Discounted Cash Flow (DCF), Trading Comparables, and Transaction Comparables method described below.</p>

                <div className="value_your_bussiness_heading mt-4">When do you need a Business Valuation?</div>
                <p className="Privacy_content">The following are some of the common reasons which necessitate valuing your business</p>
                <div className="Privacy_content mt-1">Selling the business</div>
                <div className="Privacy_content mt-1 ">Fund raising from VC or IPO</div>
                <div className="Privacy_content mt-1 ">Issuing stock to employees</div>
                <div className="Privacy_content mt-1 ">Tax purposes</div>
                <div className="Privacy_content mt-1 ">Liquidation of the company</div>
                <div className="Privacy_content mt-1 ">Financial reporting related</div>
                <div className="Privacy_content mt-1 ">Litigation related</div>
                <div className="value_your_bussiness_heading mt-4">What is a Business’ value?</div>
                <p className="Privacy_content">A company is held by two categories of owners, shareholders and debt
                    holders. The value of a pure business which accrues to both categories of owners is called the Enterprise
                    Value, whereas the value which accrues just to shareholders is the Equity Value (also called market cap
                    for listed companies). Companies are compared using the enterprise value instead of equity value as debt
                    and cash levels may vary significantly even between companies in the same industry. During an acquisition,
                    depending on whether it is an asset purchase or
                    a stock purchase, valuation of appropriate elements of the business needs to be carried out.</p>


                <div className="text-center"><img src="https://www.smergers.com/static/images/300xNxvaluation-ev.png.pagespeed.ic.tvWcZ8h1jq.webp" alt="" /></div>

                <div className="value_your_bussiness_heading mt-4">What is the difference between an Asset purchase and Stock purchase?</div>
                <div className="mt-2 mb-2"><table className="table">
                    <thead>
                        <tr>
                            <th>Acquisiton Type</th>
                            <th>Stock Purchase</th>
                            <th>Asset Purchase</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <td className="Privacy_content">Acquirer buys ownership/equity in the target company, including all of its
                                assets and liabilities</td>
                            <td className="Privacy_content">Acquirer purchases only selected assets of the target company and not
                                liabilities to minimize the risk</td>
                        </tr>
                        <tr>
                            <th>Payment</th>
                            <td className="Privacy_content">Made directly to shareholders of the target company</td>
                            <td className="Privacy_content">Made to the target company which in turn can be distributed to shareholders</td>
                        </tr>
                        <tr>
                            <th>Taxes for seller</th>
                            <td className="Privacy_content">Shareholders of the target company pay capital gains tax only</td>
                            <td className="Privacy_content">Target company will have to pay corporate tax. Shareholders will
                                also pay dividend distribution tax if money is distributed resulting
                                in double taxation</td>
                        </tr>
                        <tr>
                            <th>Risks</th>
                            <td className="Privacy_content">Acquirer assumes all risks and liabilities (including off balance sheet)
                                of the target company</td>
                            <td className="Privacy_content">Acquirer chooses the assets and liabilities which he wants to assume</td>
                        </tr>
                        <tr>
                            <th>Taxes for buyer</th>
                            <td className="Privacy_content">Assets and liabilities are continued to be carried and
                                depreciated in the same manner as before the transaction. No tax advantage</td>
                            <td className="Privacy_content">Buyers allocate the purchase price among the assets to reflect their fair market value resulting in
                                a step-up of tax basis.
                                Allows higher depreciation and amortization deductions resulting in future tax savings</td>
                        </tr>
                        <tr>
                            <th>Business Type</th>
                            <td className="Privacy_content">Only incorporated company acquisition can be structured either as a stock
                                purchase or an asset purchase</td>
                            <td className="Privacy_content">Sole proprietorship, Partnership, Limited liability partnership (LLP) acquisition
                                can be structured as an asset purchase only</td>
                        </tr>
                        <tr>
                            <th>Preferred by</th>
                            <td className="Privacy_content">Sellers</td>
                            <td className="Privacy_content">Buyers/Acquirers</td>
                        </tr>

                    </tbody>
                </table></div>

                <div className="value_your_bussiness_heading mt-4">How to value my Business?</div>
                <p className="Privacy_content">The three common approaches of valuing a company are described below:</p>

                <div className="p-3">
                    <div className="value_your_bussiness_heading">Discounted Cash Flow (DCF)</div>
                    <p className="Privacy_content">It is widely believed that DCF is the best method to estimate the fair
                        value of a company/business. As one would expect, the value of any company is the sum of the cash flows
                        that it produces in the future, discounted to the present at an appropriate rate. The discount rate used is
                        the appropriate Weighted Average Cost of Capital (WACC) that reflects the risk of the cash flows.</p>

                    <div className="value_your_bussiness_heading">Trading Comparables (trading comps)</div>
                    <p className="Privacy_content">As per the Efficient Market Hypothesis at any given time, stock
                        fully reflect all available information on a particular company and industry. Therefore trading
                        companies provide the best estimate for valuing a similar company. Average multiples such as P/E,
                        EV/EBITDA, EV/Sales, P/B, etc. are calculated from all companies similar to the one being valued
                        and the same used to calculate its enterprise
                        value. Use our free online valuation tool(below) to quickly estimate your company’s worth.</p>

                    <div className="value_your_bussiness_heading">Transaction Comparables (transaction comps)</div>
                    <p className="Privacy_content">Investment bankers widely use this method to value a company during an
                        acquisition. Technically this method is similar to trading comps and uses multiples such as P/E, EV/EBITDA,
                        EV/Sales, P/B, etc. But the comparables used are companies which have previously undergone a takeover,
                        rather peers which trade on the stock market.
                        Takeovers generally value the company higher because of a control premium paid by the acquirer.</p>
                </div>

                <div className="value_your_bussiness_heading">Online Business Valuation Tool</div>
                <p className="Privacy_content">Our online valuation tool performs Trading Comparables method of valuation
                    using data from thousands of listed firms in India and other emerging markets to provide a quick ball
                    park valuation for your company within seconds. Private companies tend to have a lower valuation compared
                    public companies because of illiquidity and inherent riskiness with private companies. A discount factor
                    of 20-30% is common to arrive at the valuation if the company being valued is small compared to an average
                    listed firm in that space. Our customized valuation report provides details of all the comparable companies
                    used along with multiples and their market cap. We also help you refine the valuation for your company by
                    letting you choose comparable companies which best represent your business. For more detailed valuation
                    report with all three methods –
                    trading comparables, transaction comparables, and discounted cash flow valuation, contact us.</p>

                <div>Note:</div>


                <div className="value_your_bussiness_heading mt-2">EBITDA Multiple Method - [ EV/EBITDA Method ]</div>
                <p className="Privacy_content">EV/EBITDA (EV:Enterprise Value; EBITDA:Earnings Before Interest, Taxes,
                    Depreciation & Amortization) is the most widely used valuation multiple based on enterprise value to
                    determine the fair market value of a company. EBITDA multiple is capital
                    structure-neutral and can be used to directly compare companies with different levels of debt</p>

                <div className="value_your_bussiness_heading mt-4">Enterprise-Value-To-Sales Method - [ EV/Sales Method ]</div>
                <p className="Privacy_content">EV/sales gives investors an idea of how much it costs to buy the company's
                    sales. Generally the lower the EV/sales the more attractive or undervalued the company is believed to be.
                    high EV/Sales is not always a bad thing as it can be a sign that investors believe the future sales will
                    greatly increase. A lower EV/sales can signal that the future sales prospects are not very attractive.
                    It is important to compare the measure to
                    that of other companies in the industry, and to look deeper into the company you are analyzing.</p>





                <hr />

                {/* Asked Quesion component*/}
                <div className="mt-3">
                    <AskedQuestion />
                </div>
            </div>
        </>
    )
}

export default withRouter(HOC1(ValueYourBusiness));
