import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './MenuFrequency.css';

const MenuFrequency = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ["Elke week", "Elke maand", "Elk seizoen", "Elk half jaar", "Jaarlijks", "Minder dan jaarlijks"];

    return (
        <Layout title="Hoe vaak past u uw menu aan ongeveer?" progress={50}>
            <div className="menu-frequency-container">
                <div className="menu-frequency-options-container">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`menu-frequency-option-button ${selectedOption === index ? "selected" : ""}`}
                            onClick={() => setSelectedOption(index)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/promoties')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default MenuFrequency;
