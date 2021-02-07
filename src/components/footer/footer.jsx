import React from "react";
import "./footer.sass";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import heart from "../../assets/heart.svg";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-inner">
                <div className="footer-icons">
                    <a
                        href="https://github.com/davidmihalovits"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <img src={github} alt="github icon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dávid-mihalovits-b1a731184"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        <img src={linkedin} alt="linkedin icon" />
                    </a>
                </div>
                <p className="footer-copyright">
                    Copyright{" "}
                    <img
                        className="footer-heart"
                        src={heart}
                        alt="copyright David Lajos Mihalovits"
                    />{" "}
                    2021 Dávid Lajos Mihalovits
                </p>
            </div>
        </div>
    );
};

export default Footer;
