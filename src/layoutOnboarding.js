import React from 'react';
import './layoutOnboarding.css';

const Layout = ({ title, children, progress }) => {
    return (
        <div className="layout">
            <header className="layout-header">
                <h1>{title}</h1>
            </header>
            <main className="layout-content">
                {children}
            </main>
            <footer className="layout-footer">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
