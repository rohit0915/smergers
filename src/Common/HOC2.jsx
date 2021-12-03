import React, { Component, Fragment } from "react";
import ContentHeader from "./Header/ContentHeader.jsx";
import SideBar from "../Components/SideBar/SideBar.jsx";
import Footer from "./Footer/Footer.jsx";
const HOC2 = (WrappedComponent) => {
    return class extends Component {
    
        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <ContentHeader  {...this.props}/>

                        <div style={{ display: "flex" }}>
                            <SideBar {...this.props} />

                            <WrappedComponent {...this.props} />
                        </div>
                        <Footer {...this.props} />
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC2;
