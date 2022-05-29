import React from "react";
import Hero from "../image/heroBG2.jpg";
import Me from '../image/me.jpg';


const styles = {
    heroStyles: {
        backgroundImage: `url(${Hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "15%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
    }
};

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <>
            <header>
                <div style={styles.heroStyles} className="hero-bg">
                    <div className="align-center  valign-wrapper row">
                        <h1 className="white-text col s8">Daniel Mrva</h1>
                        <img src={Me} alt="the programer" className="circle align-right col s4"></img>
                    </div>
                </div>
                <nav className="nav-extended brown lighten-4">

                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">
                            <li className="tab">
                                <a
                                    href="#about"
                                    onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                >About</a>
                            </li>
                            <li className="tab">
                                <a
                                    href="#projects"
                                    onClick={() => handlePageChange('Projects')}
                                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                                >Projects</a>
                            </li>
                            <li className="tab">
                                <a
                                    href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                >Contact</a>
                            </li>
                            <li className="tab">
                                <a
                                    href="#resume"
                                    onClick={() => handlePageChange('Resume')}
                                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                                >Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#contact">Resume</a></li>
                </ul>
            </header>
      </>
    );
}

export default NavTabs;
