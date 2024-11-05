import { useNavigate } from "react-router-dom";
import Layout from "./layoutOnboarding";
import React, { useState } from "react";
import "./TypeHoreca.css";

const TypeHoreca = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        "Restaurants",
        "Café",
        "Bars en Lounges",
        "Nachtleven en entertainment",
        "Cafetaria's en eetgelegenheden",
        "Fast Food",
        "Hotelgerelateerde horeca",
        "Andere"
    ];

    return (
        <Layout title="Type Horeca" progress={30}>
            <div className="type-horeca-container">
                <h1 style={{marginBottom: '5rem'}}>Welke van deze opties past het best bij uw zaak</h1>
                <div className="options-container">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${selectedOption === index ? "selected" : ""}`}
                            onClick={() => setSelectedOption(index)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/zitplaatsen')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default TypeHoreca;
