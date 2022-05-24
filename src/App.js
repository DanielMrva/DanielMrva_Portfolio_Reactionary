// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './css/materialize.css';
import NavTabs from './components/NavTabs';
import PortfolioContainer from './components/PortfolioContainer'

const App = () => {
    const [currentPage, setCurrentPage] = useState('About');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

            <PortfolioContainer currentPage={currentPage} />

        </>
    )
    
        
};


export default App;
