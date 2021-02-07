import React, { useEffect } from "react";
import "./petr.sass";
import petr_mockup from "../../assets/petr_mockup.jpg";
import Button from "@material-ui/core/Button";
import petr_feature1 from "../../assets/petr_feature1.jpg";
import petr_feature2 from "../../assets/petr_feature2.jpg";
import petr_feature3 from "../../assets/petr_feature3.jpg";
import checkmark from "../../assets/checkmark2.svg";
import newWindow from "../../assets/newWindow.svg";
import github from "../../assets/github_blue.svg";

const Petr = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="project-petr">
            <div className="project-petr-flex">
                <div className="project-petr-right">
                    <img
                        className="project-image"
                        src={petr_mockup}
                        alt="todo mockup"
                    />
                </div>
                <div className="project-petr-left">
                    <h1 className="project-description">
                        This is my PETR-stack note-taking app. It might not be
                        the most complicated project, however, I loved working
                        with this stack because of its simplicity and
                        robustness.
                    </h1>
                    <div className="project-petr-left-buttons">
                        <a
                            href="https://friendly-montalcini-71b9fd.netlify.app/"
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
                        src={petr_feature1}
                        alt="petr"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Built with React, TypeScript, Node.js and PostgreSQL
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        User authentication and basic CRUD functionalities for
                        taking notes
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Redux for maintaining the state of the entire app
                    </p>
                </div>
            </div>
            <div className="feature-middle">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={petr_feature2}
                        alt="petr"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Redux-logger for tracing actions and easier debugging
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        TypeScript for static type checking and boosting
                        productivity
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        PostgreSQL because it's a powerful object-relational
                        database that uses and extends SQL
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={petr_feature3}
                        alt="petr"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Progressive Web App with a minimalistic and mobile-first
                        responsive design
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        SASS for cleaner code, nesting, variables etc
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Conveniently add, update, color or delete notes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Petr;
