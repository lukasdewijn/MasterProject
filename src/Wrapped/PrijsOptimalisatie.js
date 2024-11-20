import React from 'react';
import './PrijsOptimalisatie.css';

const PrijsOptimalisatie = () => {
    const items = [
        { name: "Stella Artois", currentPrice: "€2,4", newPrice: "€2,6", extraPerMonth: "€80", colorClass: "prijs-optimalisatie-item-1" },
        { name: "Stella Artois", currentPrice: "€2,4", newPrice: "€2,6", extraPerMonth: "€80", colorClass: "prijs-optimalisatie-item-2" },
        { name: "Stella Artois", currentPrice: "€2,4", newPrice: "€2,6", extraPerMonth: "€80", colorClass: "prijs-optimalisatie-item-3" },
        { name: "Stella Artois", currentPrice: "€2,4", newPrice: "€2,6", extraPerMonth: "€80", colorClass: "prijs-optimalisatie-item-4" },
        { name: "Stella Artois", currentPrice: "€2,4", newPrice: "€2,6", extraPerMonth: "€80", colorClass: "prijs-optimalisatie-item-5" },
    ];

    return (
        <div className="page-container">
            <div className="prijs-optimalisatie-container">
                <h1 className="prijs-optimalisatie-title">Prijs optimalisatie</h1>
                <p className="prijs-optimalisatie-subtitle">Opgepast! De extra per maand is een schatting op basis van
                    ons datamodel.</p>
                <div className="prijs-optimalisatie-items-container">
                    {items.map((item, index) => (
                        <div key={index} className={`prijs-optimalisatie-item ${item.colorClass}`}>
                            <span className="prijs-optimalisatie-item-name">{item.name}</span>
                            <div className="prijs-optimalisatie-price-details">
                                <div className="current-price-details">
                                    <span className="prijs-optimalisatie-current-price">{item.currentPrice}</span>
                                    <p>Jouw prijs</p>
                                </div>
                                <span className="prijs-optimalisatie-arrow">→</span>
                                <div className="current-price-details">
                                    <span className="prijs-optimalisatie-new-price">{item.newPrice}</span>
                                    <p>Nieuwe prijs</p>
                                </div>
                                <div className="current-price-details">
                                    <span className="prijs-optimalisatie-extra-per-month">{item.extraPerMonth}</span>
                                    <p>Extra winst</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PrijsOptimalisatie;
