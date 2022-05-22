// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './css/materialize.min.css';
import NavTabs from './components/NavTabs';
import PortfolioContainer from './components/PortfolioContainer'

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

            <PortfolioContainer currentPage={currentPage} />

        </>
    )
    
        
};


export default App;
