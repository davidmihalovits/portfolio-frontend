import React from "react";
import "./navbar.sass";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-inner">
                <h1 className="navbar-title">Dávid Mihalovits</h1>
                <Link
                    to="contact"
                    smooth={true}
                    duration={700}
                    offset={32}
                    className="navbar-scroll"
                >
                    <button className="navbar-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
