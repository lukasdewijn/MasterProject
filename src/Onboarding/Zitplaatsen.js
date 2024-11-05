import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './Zitplaatsen.css';

const Zitplaatsen = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const options = ["1-10", "11-30", "31-50", "51-100", "101-200", "200+"];

    return (
        <Layout title="Zitplaatsen" progress={40}>
            <div className="zitplaatsen-container">
                <h1 style={{marginBottom: '5rem'}}>Hoeveel zitplaatsen heeft uw zaak?</h1>
                <div className="zitplaatsen-options-container">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`zitplaatsen-option-button ${selectedOption === index ? "selected" : ""}`}
                            onClick={() => setSelectedOption(index)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/kenmerken')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default Zitplaatsen;
