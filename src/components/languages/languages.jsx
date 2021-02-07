import React from "react";
import "./languages.sass";
import html from "../../assets/html.svg";
import sass from "../../assets/sass.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import node from "../../assets/node.svg";
import mongodb from "../../assets/mongodb.svg";
import vscode from "../../assets/vscode.svg";
import postman from "../../assets/postman.svg";
import git from "../../assets/git.svg";
import figma from "../../assets/figma.svg";
import socket from "../../assets/socket.svg";
import postgres from "../../assets/postgres.svg";
import ts from "../../assets/ts.svg";
import sequelize from "../../assets/sequelize.svg";

const Languages = () => {
    return (
        <div className="languages-container">
            <h1 className="languages-title">Tools I use</h1>
            <div className="languages-grid">
                <img className="language" src={html} alt="html" />
                <img className="language" src={sass} alt="sass" />
                <img className="language" src={js} alt="js" />
                <img className="language" src={ts} alt="ts" />
                <img className="language" src={react} alt="react" />
                <img className="language" src={redux} alt="redux" />
                <img className="language" src={node} alt="nodejs" />
                <img className="language" src={mongodb} alt="mongodb" />
                <img className="language" src={postgres} alt="postgres" />
                <img className="language" src={socket} alt="socket" />
                <img className="language" src={git} alt="git" />
                <img className="language" src={vscode} alt="vscode" />
                <img className="language" src={postman} alt="postman" />
                <img className="language" src={figma} alt="figma" />
                <img className="language" src={sequelize} alt="sequelize" />
            </div>
        </div>
    );
};

export default Languages;
