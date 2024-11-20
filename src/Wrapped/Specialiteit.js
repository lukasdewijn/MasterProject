import React from 'react';
import './Specialiteit.css';

const Specialiteit = () => {
    const topItems = [
        { name: "Stella Artois", colorClass: "bier-item-1" },
        { name: "Aperol Spritz", colorClass: "bier-item-2" },
        { name: "Schweppes", colorClass: "bier-item-3" },
    ];

    const bottomItems = [
        { name: "Heineken", colorClass: "bier-item-4" },
        { name: "Fanta Cherry", colorClass: "bier-item-5" },
        { name: "Sprite", colorClass: "bier-item-6" },
    ];

    return (
        <div className="specialiteit-container">
            <div className="titel-container">
                <h1 className="specialiteit-titel">Bier in Beeld</h1>
                <p className="specialiteit-subtitle">Je specialiteit in vergelijking met andere zaken</p>
            </div>

            <div className="specialiteit-items-container">
                <p className="specialiteit-section-description">
                    Deze bieren scoren bovengemiddeld in populariteit, vergeleken met andere café's.
                </p>
                <div className="specialiteit-items-container">
                    {topItems.map((item, index) => (
                        <div key={index} className={`bier-item ${item.colorClass}`}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="spacer1"></div>
                <p className="specialiteit-section-description">
                    Deze bieren scoren ondergemiddeld in populariteit, vergeleken met andere café's.
                </p>

                <div className="specialiteit-items-container">
                    {bottomItems.map((item, index) => (
                        <div key={index} className={`bier-item ${item.colorClass}`}>
                            {item.name}
                        </div>
                    ))}
                </div>
                <div className="spacer2"></div>
            </div>
        </div>
    );
};

export default Specialiteit;
