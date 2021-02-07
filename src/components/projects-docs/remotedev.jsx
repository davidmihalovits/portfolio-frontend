import React, { useEffect } from "react";
import "./remotedev.sass";
import remotedev_mockup from "../../assets/remotedev_mockup.jpg";
import Button from "@material-ui/core/Button";
import remotedev_feature1 from "../../assets/remotedev_feature1.jpg";
import remotedev_feature2 from "../../assets/remotedev_feature2.jpg";
import remotedev_feature3 from "../../assets/remotedev_feature3.jpg";
import checkmark from "../../assets/checkmark2.svg";
import newWindow from "../../assets/newWindow.svg";
import github from "../../assets/github_blue.svg";

const Remotedev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="project-remotedev">
            <div className="project-remotedev-flex">
                <div className="project-remotedev-right">
                    <img
                        className="project-image"
                        src={remotedev_mockup}
                        alt="remotedev mockup"
                    />
                </div>
                <div className="project-remotedev-left">
                    <h1 className="project-description">
                        A job board where people can easily find and apply for
                        remote jobs by submitting their resume. Companies can
                        post job ads after making a secure payment through
                        Stripe.
                    </h1>
                    <div className="project-remotedev-left-buttons">
                        <a
                            href="https://festive-neumann-889a65.netlify.app/"
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
                        src={remotedev_feature1}
                        alt="remotedev mockup"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Built with React, Node.js and PostgreSQL, deployed on
                        Netlify and Heroku
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Job board for finding remote jobs, with search and
                        filter functionalities
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Easily apply for a job by submitting your resume in PDF
                        format that goes directly to the company's email address
                    </p>
                </div>
            </div>
            <div className="feature-middle">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={remotedev_feature2}
                        alt="remotedev mockup"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Companies can post job ads by filling out the form (job
                        description, company logo etc)
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Implemented Stripe for making secure payments
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Used PostgreSQL with Sequelize to easily manage the
                        database and write effective queries quickly
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={remotedev_feature3}
                        alt="remotedev mockup"
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

export default Remotedev;
