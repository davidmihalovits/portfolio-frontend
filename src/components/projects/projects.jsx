import React from "react";
import "./projects.sass";
import fitzgerald_mockup from "../../assets/fitzgerald_mockup_black.jpg";
import zoocial_mockup from "../../assets/zoocial_mockup_black.jpg";
import petr_mockup from "../../assets/petr_mockup_black.jpg";
import remotedev_mockup from "../../assets/remotedev_mockup_black.jpg";
import goldcoin_mockup from "../../assets/goldcoin_mockup_black.jpg";

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-inner">
                <h1 className="projects-title">Projects</h1>
                <div className="projects">
                    <div className="project">
                        <img
                            className="project-image"
                            src={zoocial_mockup}
                            alt="Social media app project"
                        />
                        <h2 className="project-title">
                            Social Media App Clone
                        </h2>
                        <p className="project-paragraph">
                            A full-stack responsive social media web app with
                            CRUD functionalities, server-side authentication and
                            global state management.
                        </p>
                        <p className="project-hashtags">
                            #react #express #mongodb #redux #socket.io #firebase
                            #pwa
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://inspiring-bassi-9a2805.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button">
                                    Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/davidmihalovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button2">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <img
                            className="project-image"
                            src={fitzgerald_mockup}
                            alt="Fitzgerald project"
                        />
                        <h2 className="project-title">
                            Fitzgerald Spine & Sports
                        </h2>
                        <p className="project-paragraph">
                            A responsive landing page with a fully fledged
                            contact form I built for a client providing
                            evidence-based treatments for sports medicine and
                            chiropractic therapy.
                        </p>
                        <p className="project-hashtags">
                            #nodemailer #sass #recaptcha #react
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://www.fitzgeraldspinesports.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button">
                                    Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/davidmihalovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button2">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <img
                            className="project-image"
                            src={petr_mockup}
                            alt="todo mockup"
                        />
                        <h2 className="project-title">Note-Taking App</h2>
                        <p className="project-paragraph">
                            A simple note-taking app in the cloud powered by
                            TypeScript and PostgreSQL.
                        </p>
                        <p className="project-hashtags">
                            #typescript #postgresql #nodejs #crud #redux
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://friendly-montalcini-71b9fd.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button">
                                    Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/davidmihalovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button2">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <img
                            className="project-image"
                            src={remotedev_mockup}
                            alt="remotedev mockup"
                        />
                        <h2 className="project-title">Remote Job Board</h2>
                        <p className="project-paragraph">
                            A job board where people can find and apply for
                            remote jobs by submitting their resume. Companies
                            can also post job ads after making a secure payment
                            through Stripe.
                        </p>
                        <p className="project-hashtags">
                            #react #postgresql #express #stripe #heroku
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://festive-neumann-889a65.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button">
                                    Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/davidmihalovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button2">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <img
                            className="project-image"
                            src={goldcoin_mockup}
                            alt="remotedev mockup"
                        />
                        <h2 className="project-title">Gold Coin Crypto App</h2>
                        <p className="project-paragraph">
                            An ongoing cryptocurrency project where users will
                            be able to buy, sell, trade and invest in Gold Coin.
                        </p>
                        <p className="project-hashtags">
                            #sequelize #recharts #nodejs #react #postgresql
                            #redux
                        </p>
                        <div className="project-buttons">
                            <a
                                href="https://epic-bell-25bbfa.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button">
                                    Website
                                </button>
                            </a>
                            <a
                                href="https://github.com/davidmihalovits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects-button-link"
                            >
                                <button className="project-button2">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
