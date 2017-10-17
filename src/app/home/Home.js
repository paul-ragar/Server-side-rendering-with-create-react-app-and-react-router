import React from 'react';
import { Link } from 'react-router';

const Home = () => (
    <div className="container">
        <h1> You are on the home page!</h1>
        <Link to="/settings">Settings</Link>
    </div>
);

export default Home;

