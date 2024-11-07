import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './MarketingStrategy.css';

const MarketingStrategy = () => {
    const navigate = useNavigate();
    const [selectedStrategies, setSelectedStrategies] = useState([]);

    const strategies = [
        "Social Media", "E-mail", "Samenwerking met Influencers", "Search Engine Optimalization",
        "Website", "Lokale Evenementen", "Flyers en Drukwerk", "Advertenties op Sociale Media",
        "Samenwerking met Lokale Bedrijven", "Referral Programma", "Seizoensgebonden Acties"
    ];

    const handleStrategyToggle = (strategy) => {
        setSelectedStrategies(prevState =>
            prevState.includes(strategy)
                ? prevState.filter(item => item !== strategy)
                : [...prevState, strategy]
        );
    };

    return (
        <Layout title="Selecteer alle marketingstrategieën die u momenteel gebruikt of zou willen overwegen." progress={80}>
            <div className="marketing-strategie-container">
                <div className="marketing-strategie-options">
                    {strategies.map((strategy, index) => (
                        <button
                            key={index}
                            className={`strategie-button ${selectedStrategies.includes(strategy) ? "selected" : ""}`}
                            onClick={() => handleStrategyToggle(strategy)}
                        >
                            {strategy}
                        </button>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/next-page')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default MarketingStrategy;
