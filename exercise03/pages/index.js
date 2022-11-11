// Import React and routing dependecies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

// Define routes
const Pages = props => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="mynotes" element={<MyNotes/>} />
                <Route path="favorites" element={<Favorites/>} />
            </Routes>
        </Router>
    );
};

export default Pages;