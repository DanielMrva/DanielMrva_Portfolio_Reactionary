import React, {useState} from 'react';
import NavTabs from './NavTabs';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] =
    useState('Home');

    const renderPage = () => {
        switch(currentPage) {
            case 'Home': 
                return <Home />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Projects':
                return <Projects />;
            default:
                return <Home />
        };

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> {renderPage()}
        </div>
    );

}