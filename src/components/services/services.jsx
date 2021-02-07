import React from "react";
import "./services.sass";
import checkmark from "../../assets/checkmark2.svg";

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="services-title">What I do</h1>
            <div className="services">
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Write clean, efficient code by using best software
                        development practices.
                    </p>
                </div>
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Debug, troubleshoot and resolve problems. Expert in
                        Googling.
                    </p>
                </div>
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Integrate data from various back-end services and
                        databases. Connect front end with back end.
                    </p>
                </div>
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Be responsible for maintaining, expanding, and scaling
                        websites.
                    </p>
                </div>
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Keep up to date with emerging technologies and industry
                        trends.
                    </p>
                </div>
                <div className="service">
                    <img
                        className="checkmark"
                        src={checkmark}
                        alt="checkmark"
                    />
                    <p className="paragraph">
                        Cooperate with web designers to match visual design
                        intent.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
