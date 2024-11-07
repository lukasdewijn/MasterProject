import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './Profielverdeling.css';

const Profielverdeling = () => {
    const navigate = useNavigate();
    const [percentages, setPercentages] = useState({
        "Arbeidersklasse": 0,
        "Werkende middenklasse": 0,
        "Hogere middenklasse": 0,
        "Elite": 0
    });

    const getTotalPercentage = () => {
        return Object.values(percentages).reduce((acc, curr) => acc + curr, 0);
    };

    const handleIncrement = (group) => {
        setPercentages(prev => {
            const total = getTotalPercentage();
            if (total < 100) {
                return { ...prev, [group]: Math.min(prev[group] + 1, 100 - (total - prev[group])) };
            }
            return prev;
        });
    };

    const handleDecrement = (group) => {
        setPercentages(prev => {
            return { ...prev, [group]: Math.max(prev[group] - 1, 0) };
        });
    };

    const handleSliderChange = (group, value) => {
        const updatedValue = parseInt(value);
        const totalExcludingCurrent = getTotalPercentage() - percentages[group];

        if (totalExcludingCurrent + updatedValue <= 100) {
            setPercentages(prev => ({
                ...prev,
                [group]: updatedValue
            }));
        } else {
            // Adjust to the maximum possible value without exceeding 100
            setPercentages(prev => ({
                ...prev,
                [group]: 100 - totalExcludingCurrent
            }));
        }
    };

    return (
        <Layout title="Clientele analyse" progress={70}>
            <div className="leeftijdsverdeling-container">
                <div className="leeftijdsverdeling-text-container">
                    <h2>Profielverdeling van de klanten</h2>
                    <p>Gebruik de schuifregelaars onder elke profielcategorie om het percentage klanten per profielgroep aan te passen.</p>
                    <p className="subtext">Zorg ervoor dat het totaal van alle groepen samen 100% is.</p>
                </div>
                <div className="age-group-controls">
                    {Object.keys(percentages).map((group, index) => (
                        <div key={index} className="age-group">
                            <button className="adjust-button" onClick={() => handleDecrement(group)}>-</button>
                            <span className="percentage-display">{percentages[group]}%</span>
                            <button className="adjust-button" onClick={() => handleIncrement(group)}>+</button>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={percentages[group]}
                                className="slider"
                                style={{
                                    background: `linear-gradient(to right, #FA954B ${percentages[group]}%, #f9d8b4 ${percentages[group]}%)`
                                }}
                                onChange={(e) => handleSliderChange(group, e.target.value)}
                            />
                            <span className="age-label">{group}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/personas')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default Profielverdeling;
