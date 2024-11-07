import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './Promoties.css';

const Promoties = () => {
    const navigate = useNavigate();

    // State to manage selected promotions
    const [selectedPromotions, setSelectedPromotions] = useState([]);

    const promotions = [
        "Happy Hour", "2+1 Gratis", "Seizoensspecials", "Product van de dag/week",
        "Groepskorting", "Loyaliteitsprogramma", "Social Media Aanbiedingen", "Studentenkorting",
        "Familiekorting", "Lunchdeals", "All-You-Can-Eat", "Gratis Aperitief",
        "Korting op Afhaalmaaltijden", "Eerste Bestelling korting", "Gift/Cadeau"
    ];

    const handlePromotionToggle = (promotion) => {
        setSelectedPromotions(prevState =>
            prevState.includes(promotion)
                ? prevState.filter(item => item !== promotion)
                : [...prevState, promotion]
        );
    };

    return (
        <Layout title="Welke type promoties doet u?" progress={70}>
            <div className="promoties-container">
                <div className="promoties-options-container">
                    {promotions.map((promotion, index) => (
                        <button
                            key={index}
                            className={`promotie-button ${selectedPromotions.includes(promotion) ? "selected" : ""}`}
                            onClick={() => handlePromotionToggle(promotion)}
                        >
                            {promotion}
                        </button>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/marketingstrategy')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default Promoties;
