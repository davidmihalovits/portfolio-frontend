import React, { useEffect } from "react";
import "./fitzgerald.sass";
import fitzgerald_mockup from "../../assets/fitzgerald_mockup.jpg";
import Button from "@material-ui/core/Button";
import fitzgerald_feature1 from "../../assets/fitzgerald_feature1.jpg";
import fitzgerald_feature2 from "../../assets/fitzgerald_feature2.jpg";
import fitzgerald_feature3 from "../../assets/fitzgerald_feature3.jpg";
import checkmark from "../../assets/checkmark2.svg";
import newWindow from "../../assets/newWindow.svg";
import github from "../../assets/github_blue.svg";

const Fitzgerald = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="project-fitzgerald">
            <div className="project-fitzgerald-flex">
                <div className="project-fitzgerald-right">
                    <img
                        className="project-image"
                        src={fitzgerald_mockup}
                        alt="Fitzgerald mockup"
                    />
                </div>
                <div className="project-fitzgerald-left">
                    <h1 className="project-description">
                        A responsive landing page with a fully fledged contact
                        form I built for a client providing evidence-based
                        treatments for sports medicine and chiropractic therapy.
                    </h1>
                    <div className="project-fitzgerald-left-buttons">
                        <a
                            href="https://www.fitzgeraldspinesports.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-link"
                        >
                            <Button className="visit-button">
                                <img
                                    className="button-icon"
                                    src={newWindow}
                                    alt="button icon"
                                />{" "}
                                Visit website
                            </Button>
                        </a>
                        <a
                            href="https://github.com/davidmihalovits"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-link"
                        >
                            <Button className="visit-button">
                                <img
                                    className="button-icon"
                                    src={github}
                                    alt="button icon"
                                />{" "}
                                Visit GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="feature-title">Features</h1>
            <div className="feature">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={fitzgerald_feature1}
                        alt="Fitzgerald mockup"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Built with React and Node.js, integrated front end with
                        back end
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Showcase general details, services and staff members
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Cooperated with UX/UI designers for more efficient
                        planning and execution
                    </p>
                </div>
            </div>
            <div className="feature-middle">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={fitzgerald_feature2}
                        alt="Fitzgerald mockup"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Fully-fledged contact form built with Nodemailer
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Google Maps static API to display a map
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Google reCAPTCHA for extra protection from spammers and
                        bots
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={fitzgerald_feature3}
                        alt="Fitzgerald mockup"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Responsive design for all screens
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Mobile-first approach, cross-browser compatibility
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        SASS for cleaner code, nesting, variables etc
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Fitzgerald;
