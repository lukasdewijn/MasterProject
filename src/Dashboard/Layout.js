import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the reusable Sidebar component
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            {/* Sidebar */}
            <Sidebar /> {/* Replace inline sidebar with the reusable Sidebar component */}

            {/* Main Content */}
            <div className="main-content">
                <Outlet /> {/* This renders the content of the current route */}
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                <div className="filter-header">Filters</div>
                <ul className="filter-options">
                    <li>
                        <input type="checkbox" id="option1" />
                        <label htmlFor="option1">Option 1</label>
                    </li>
                    <li>
                        <input type="checkbox" id="option2" />
                        <label htmlFor="option2">Option 2</label>
                    </li>
                    <li>
                        <input type="checkbox" id="option3" />
                        <label htmlFor="option3">Option 3</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Layout;
