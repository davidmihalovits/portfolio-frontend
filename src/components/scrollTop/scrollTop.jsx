import React from "react";
import "./scrollTop.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-up";

const ScrollTop = () => {
    return (
        <ScrollToTop easing={"easeInOutCubic"} duration={700} showUnder={360}>
            <FontAwesomeIcon icon={faCaretUp} size="3x" className="caret" />
        </ScrollToTop>
    );
};

export default ScrollTop;
