import React from "react";
import "./header.sass";
import profile from "../../assets/profile.jpg";
import doc from "../../assets/doc.svg";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                <h1 className="header-title">
                    Hello, I'm <span className="header-blue">Dávid</span>, a
                    full-stack web developer. I currently work at
                    <span className="header-blue"> Webabstract</span>, a
                    Budapest-based digital agency.
                </h1>
                <p className="header-resume">
                    <a
                        href="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-44b2a.appspot.com/o/DavidLajosMihalovits_Resume_WebDeveloper.pdf?alt=media&token=2c2fc703-b14a-4e31-893a-a0d14f98c883"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-resume-link"
                    >
                        <img
                            className="header-resume-doc"
                            src={doc}
                            alt="download resume"
                        />
                        View resume (PDF)
                    </a>
                </p>
            </div>
            <div className="header-right">
                <img
                    className="header-profile-image"
                    src={profile}
                    alt="David Lajos Mihalovits profile"
                />
            </div>
        </div>
    );
};

export default Header;
