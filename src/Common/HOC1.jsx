import React, { Fragment, Component } from "react";
import Footer from "./Footer/Footer.jsx";
import ContentHeader from "./Header/ContentHeader.jsx";
const HOC = (Wcomponent) => {
    return class extends Component {


        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <ContentHeader {...this.props} />
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
