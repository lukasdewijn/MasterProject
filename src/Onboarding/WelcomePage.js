import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding.js';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <Layout title="Welkom bij onze horecatool" progress={10} showFooter={false}>
            <h1>
                Met deze vragenlijst willen we meer te weten komen over uw zaak, zodat we onze inzichten en aanbevelingen kunnen afstemmen op uw specifieke situatie. Het invullen van deze vragen duurt slechts een paar minuten en helpt ons om u van de best mogelijke ondersteuning te voorzien.
            </h1>
            <br/>
            <h1>Klik op 'Start' om te beginnen.</h1>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/contact')}>Start</button>
            </div>
            <br/>
            <br/>
        </Layout>
    );
};

export default WelcomePage;
