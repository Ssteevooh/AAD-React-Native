// Import React and routing dependecies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Import shared layout component
import Layout from '../components/Layout';

// Import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';

// Define routes
const Pages = props => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="mynotes" element={<MyNotes/>} />
                    <Route path="favorites" element={<Favorites/>} />
                    <Route path='note/:id' element={<NotePage/>} />
                    <Route path='signup' element={<SignUp/>} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default Pages;