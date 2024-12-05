import React from 'react';
import Layout from './Layout'; // Import the reusable Layout component

const DashboardLanding = () => {
    return (
        <Layout>
            <div>
                <h1>Welcome to the Dashboard</h1>
                <p>Select a category from the sidebar to get started!</p>
            </div>
        </Layout>
    );
};

export default DashboardLanding;
