import React from "react";
import "./about.sass";
import passion from "../../assets/passion.svg";
import problem from "../../assets/problem.svg";
import teamPlayer from "../../assets/teamplayer.svg";
import { Element } from "react-scroll";

const About = () => {
    return (
        <Element name="about">
            <div className="about-container">
                <div className="about-inner">
                    <div className="about">
                        <img
                            className="about-icon"
                            src={passion}
                            alt="Passion for knowledge icon"
                        />
                        <h1 className="about-title">Passion for knowledge</h1>
                        <p className="about-paragraph">
                            As a self-taught developer I like taking up new
                            challenges and bringing creative ideas to life from
                            scratch. I acquired my coding skills from online
                            tutorials and by building modern websites and web
                            apps.
                        </p>
                    </div>
                    <div className="about">
                        <img
                            className="about-icon"
                            src={problem}
                            alt="Effective problem solver icon"
                        />
                        <h1 className="about-title">
                            Effective problem solver
                        </h1>
                        <p className="about-paragraph">
                            My favorite part is when I’m given a task and I can
                            build something awesome. I open up to new ways of
                            thinking and explore options before implementing the
                            right solution.
                        </p>
                    </div>
                    <div className="about">
                        <img
                            className="about-icon"
                            src={teamPlayer}
                            alt="Team player icon"
                        />
                        <h1 className="about-title">Team player</h1>
                        <p className="about-paragraph">
                            I’ve been working as a web developer since April
                            2020. It’s a great opportunity for me to work on
                            different projects and expand my knowledge. I strive
                            to carry out my duties to the best of my ability.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;
