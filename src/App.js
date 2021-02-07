import React from "react";
import "./App.sass";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Projects from "./components/projects/projects";
import Languages from "./components/languages/languages";
import Problems from "./components/problems/problems";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Methodology from "./components/methodology/methodology";
import ScrollTop from "./components/scrollTop/scrollTop";

const App = () => {
    return (
        <div>
            <Header />
            <Projects />
            <Services />
            <About />
            <Languages />
            <Problems />
            <Methodology />
            <Contact />
            <Navbar />
            <Footer />
            <ScrollTop />
        </div>
    );
};

export default App;
