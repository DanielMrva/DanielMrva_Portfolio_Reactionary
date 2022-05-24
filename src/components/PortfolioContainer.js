// import React, {useState} from 'react';
// import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer({currentPage}) {


    const renderPage = (currentPage) => {
        switch(currentPage) {
            case 'Home': 
                return <Home />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            case 'Resume':
                return <Resume />
            default:
                return <About />
        };

    };


    return (
        <div id="content-wrap">

            {renderPage(currentPage)}
        </div>
    );

}