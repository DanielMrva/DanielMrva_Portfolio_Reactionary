import React from "react";
import hero from '../image/heroBG.png'

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <>
            <header>
                <img src={hero} className="hero" alt=""></img>
            </header>
            <nav className="nav-extended brown lighten-4">
                {/* <div className="nav-wrapper">
                    <a href="#home"
                            onClick={() => handlePageChange('Home')}
                            className="brand-logo"
                        >Daniel Mrva</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div> */}
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
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
      </>
    );
}

export default NavTabs;