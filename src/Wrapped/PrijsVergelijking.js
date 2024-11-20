import React from 'react';
import './PrijsVergelijking.css';

const PrijsVergelijking = () => {
    const comparisonItems = [
        { name: "Stella Artois", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-1" },
        { name: "Fanta", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-2" },
        { name: "Aperol Spritz", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-3" },
        { name: "Schweppes", comparison: "- €0,20", colorClass: "prijs-vergelijken-item-4" },
        { name: "Coca-Cola", comparison: "- €0,15", colorClass: "prijs-vergelijken-item-5" },
        { name: "Stella Artois", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-1" },
        { name: "Fanta", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-2" },
        { name: "Aperol Spritz", comparison: "+ €0,30", colorClass: "prijs-vergelijken-item-3" },
        { name: "Schweppes", comparison: "- €0,20", colorClass: "prijs-vergelijken-item-4" },
        { name: "Coca-Cola", comparison: "- €0,15", colorClass: "prijs-vergelijken-item-5" },
    ];

    const generateDescription = (comparison) => {
        const amount = comparison.match(/[+-]?\s?€\d+,\d+/); // Extract the "+ €0,30" or "- €0,20" part
        if (!amount) return null;

        if (comparison.includes("+")) {
            return `Dit product is ${amount[0]} duurder dan gemiddeld in vergelijkbare zaken.`;
        } else {
            return `Dit product is ${amount[0]} goedkoper dan gemiddeld in vergelijkbare zaken.`;
        }
    };

    return (
        <div className="page-container">
            <div className="prijs-vergelijken-container">
                <h1 className="prijs-vergelijken-title">Prijsvergelijking</h1>
                <p className="prijs-vergelijken-subtitle">De prijs van je items vergelijken met de gemiddelde prijs van andere zaken.</p>
                <div className="prijs-vergelijken-items-container">
                    {comparisonItems.map((item, index) => (
                        <div key={index} className={`prijs-vergelijken-item ${item.colorClass}`}>
                            <div className="prijs-vergelijken-item-content">
                                <span className="prijs-vergelijken-item-name">{item.name}</span>
                                <span className="prijs-vergelijken-comparison">{item.comparison}</span>
                            </div>
                            {/* Beschrijving alleen voor het eerste item */}
                            {index === 0 && (
                                <p className="prijs-vergelijken-description">
                                    {generateDescription(item.comparison)}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrijsVergelijking;
