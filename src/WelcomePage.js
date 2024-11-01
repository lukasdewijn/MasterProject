import React from 'react';
import Layout from './layoutOnboarding.js';

const WelcomePage = () => {
    return (
        <Layout title="Welcome bij onze horecatool" progress={10}>
            <div>
                <p>
                    Met deze vragenlijst willen we meer te weten komen over uw zaak, zodat we onze inzichten en aanbevelingen kunnen afstemmen op uw specifieke situatie. Het invullen van deze vragen duurt slechts een paar minuten en helpt ons om u van de best mogelijke ondersteuning te voorzien.
                </p>
                <button className="start-button">Start</button>
            </div>
        </Layout>
    );
};

export default WelcomePage;
