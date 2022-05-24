// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './css/materialize.css';
import NavTabs from './components/NavTabs';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/pages/Footer';

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div id="page-container">
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
                <main className='content'>
                    <PortfolioContainer currentPage={currentPage} />
                </main>
                <Footer />
            </div>

        </>
    )
    
        
};


export default App;
