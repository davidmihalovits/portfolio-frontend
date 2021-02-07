import React from "react";
import "./methodology.sass";
import planning from "../../assets/planning.svg";
import server from "../../assets/server.svg";
import responsive from "../../assets/responsive.svg";
import debug from "../../assets/debug.svg";
import review from "../../assets/review.svg";
import maintenance from "../../assets/maintenance.svg";

const Methodology = () => {
    return (
        <div className="methodology-container">
            <h1 className="methodology-title">Methodology</h1>
            <div className="methods">
                <div className="method">
                    <img
                        className="method-image"
                        src={planning}
                        alt="planning"
                    />
                    <h2 className="method-title">Plan & research</h2>
                    <p className="method-description">
                        Conducting a thorough analysis of what users desire is
                        the key for building high-quality websites or web apps.
                        My job is to write clean code but I also plan ahead for
                        maximum efficiency.
                    </p>
                </div>
                <div className="method">
                    <img className="method-image" src={server} alt="server" />
                    <h2 className="method-title">Client-server integration</h2>
                    <p className="method-description">
                        As a full-stack developer I love creating something
                        fully functioning. I make it come alive by linking the
                        back end to the front end.
                    </p>
                </div>
                <div className="method">
                    <img
                        className="method-image"
                        src={responsive}
                        alt="server"
                    />
                    <h2 className="method-title">Mobile-first approach</h2>
                    <p className="method-description">
                        I start with the mobile version which then adapts to
                        larger screens. I make sure everything is responsive and
                        deliver the right UX to the right screen.
                    </p>
                </div>
                <div className="method">
                    <img className="method-image" src={debug} alt="server" />
                    <h2 className="method-title">Debug & test</h2>
                    <p className="method-description">
                        Users should have a smooth experience so I spend time
                        detecting and removing errors. Debugging begins as soon
                        as the code is written and I make sure it works in every
                        popular browser.
                    </p>
                </div>
                <div className="method">
                    <img className="method-image" src={review} alt="server" />
                    <h2 className="method-title">Review & deploy</h2>
                    <p className="method-description">
                        Before going live I double-check all the
                        functionalities, spellings and optimization options. A
                        good web hosting provider should offer at least 99%
                        uptime, variety of plans and 24/7 customer service.
                    </p>
                </div>
                <div className="method">
                    <img
                        className="method-image"
                        src={maintenance}
                        alt="server"
                    />
                    <h2 className="method-title">Maintain & refine</h2>
                    <p className="method-description">
                        Job's not done yet. Websites and web apps must be
                        scaled, maintained and monitored for better usability.
                        Code readability guarantees that we, developers, are
                        able to make changes easily to keep up with the current
                        trends.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Methodology;
