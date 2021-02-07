import React, { useEffect } from "react";
import "./social.sass";
import zoocial_mockup from "../../assets/zoocial_mockup.jpg";
import Button from "@material-ui/core/Button";
import zoocial_feature1 from "../../assets/zoocial_feature1.jpg";
import zoocial_feature2 from "../../assets/zoocial_feature2.jpg";
import zoocial_feature3 from "../../assets/zoocial_feature3.jpg";
import checkmark from "../../assets/checkmark2.svg";
import newWindow from "../../assets/newWindow.svg";
import github from "../../assets/github_blue.svg";

const Social = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="project-social">
            <div className="project-social-flex">
                <div className="project-social-right">
                    <img
                        className="project-image"
                        src={zoocial_mockup}
                        alt="Zoocial mockup"
                    />
                </div>
                <div className="project-social-left">
                    <h1 className="project-description">
                        My capstone project, a full-stack responsive social
                        media web app with CRUD functionalities, server-side
                        authentication and global state management.
                    </h1>
                    <div className="project-social-left-buttons">
                        <a
                            href="https://inspiring-bassi-9a2805.netlify.app/"
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
                        src={zoocial_feature1}
                        alt="zoocial"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Built with React, Node.js and MongoDB
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Numerous social media features, CRUD functionalities,
                        authentication etc
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Redux for global state management (e.g. same username
                        across components)
                    </p>
                </div>
            </div>
            <div className="feature-middle">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={zoocial_feature2}
                        alt="zoocial"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Socket.IO for bi-directional communication between the
                        client and server (real-time notifications)
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Firebase storage for storing files (profile pictures)
                    </p>
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        MongoDB and Mongoose for rapid development and data
                        retrieval
                    </p>
                </div>
            </div>
            <div className="feature">
                <div className="feature-right">
                    <img
                        className="feature-image"
                        src={zoocial_feature3}
                        alt="zoocial"
                    />
                </div>
                <div className="feature-left">
                    <p className="feature-description">
                        <img
                            className="checkmark"
                            src={checkmark}
                            alt="checkmark"
                        />
                        Mobile-first responsive design, cross-browser
                        compatibility
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
                        Bcryptjs for hashing user passwords and JWT for
                        authorization
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Social;
