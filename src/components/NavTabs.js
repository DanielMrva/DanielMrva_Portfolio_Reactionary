import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className="divider">
            <nav className="nav-extended brown lighten-4">
            <div className="nav-wrapper">
                <a href="#home"
                        onClick={() => handlePageChange('Home')}
                        classNameName="brand-logo"
                    >Daniel Mrva</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            classNameName={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About</a>
                    </li>
                    <li className="tab">
                        <a
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            classNameName={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >Projects</a>
                    </li>
                    <li className="tab">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            classNameName={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
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
      </div>
    );
}

export default NavTabs;