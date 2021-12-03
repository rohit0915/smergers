import React, { Fragment, Component } from "react";
import MainHeader from "./Header/MainHeader.jsx"
import Footer from "./Footer/Footer.jsx";
const HOC = (Wcomponent) => {
    return class extends Component {


        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <MainHeader {...this.props} />
                        <div>
                            <Wcomponent {...this.props} />
                        </div>
                        <Footer {...this.props} />
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC;
