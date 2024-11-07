import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './ToerismeAnalysis.css';

const ToerismeAnalysis = () => {
    const navigate = useNavigate();
    const [percentage, setPercentage] = useState(50); // Initial ratio of 50%
    const sliderRef = useRef(null);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const updateTooltipPosition = () => {
            if (sliderRef.current && tooltipRef.current) {
                const slider = sliderRef.current;
                const tooltip = tooltipRef.current;
                const sliderWidth = slider.offsetWidth;
                const tooltipWidth = tooltip.offsetWidth;

                const offset = (percentage / 100) * sliderWidth - tooltipWidth / 2;
                tooltip.style.left = `${offset}px`;
            }
        };

        updateTooltipPosition();
    }, [percentage]);

    const handleSliderChange = (value) => {
        setPercentage(parseInt(value));
    };

    return (
        <Layout title="Cliënteel Analyse" subtitle="Toerisme" progress={80}>
            <div className="toerisme-analysis-container">
                <p className="toerisme-analysis-subtitle">
                    Gebruik de schuifregelaar om de verhouding toeristen en lokale klanten weer te geven
                </p>
                <div className="slider-wrapper">
                    <span className="label">Lokale mensen</span>
                    <div className="slider-container">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={percentage}
                            ref={sliderRef}
                            className="toerisme-slider"
                            onChange={(e) => handleSliderChange(e.target.value)}
                            style={{
                                background: `linear-gradient(to right, var(--sandy-brown) ${percentage}%, #F9D8B4 ${percentage}%)`
                            }}
                        />
                    </div>
                    <span className="label">Toeristen</span>
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/uploadmenu')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default ToerismeAnalysis;
