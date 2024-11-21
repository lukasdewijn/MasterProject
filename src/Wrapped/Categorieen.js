import React from 'react';
import './Categorieen.css';

const data = [
    { category: "Bier", jouwZaak: 32, gemiddeld: 28 },
    { category: "Frisdrank", jouwZaak: 28, gemiddeld: 30 },
    { category: "Cocktail", jouwZaak: 20, gemiddeld: 18 },
    { category: "Wijn", jouwZaak: 25, gemiddeld: 22 },
    { category: "Alcoholvrij bier", jouwZaak: 10, gemiddeld: 12 },
    { category: "Warme dranken", jouwZaak: 12, gemiddeld: 15 },
    { category: "Water", jouwZaak: 8, gemiddeld: 10 },
    { category: "Aperitief", jouwZaak: 5, gemiddeld: 7 },
    { category: "Mocktail", jouwZaak: 3, gemiddeld: 5 },
];

const Categorieen = () => {
    return (
        <div className="categories-page-container">
            <div className="categories-title-container">
                <h1>Categorieën</h1>
                <h2>Je categorieën in vergelijking met andere zaken</h2>
            </div>
            <div className="categories-data-container">
                <div className="categories-legend">
                    <div className="legend-item">
                        <span className="legend-circle jouw-zaak"></span> Jouw zaak
                    </div>
                    <div className="legend-item">
                        <span className="legend-circle gemiddeld"></span> Gemiddelde van vergelijkbare zaken
                    </div>
                </div>
                <div className="categories-bars">
                    {data.map((item, index) => (
                        <div key={index} className="category-row">
                            <span className="category-name">{item.category}</span>
                            <div className="bars-container">
                                <div
                                    className="bar jouw-zaak"
                                    style={{width: `${item.jouwZaak}%`}}
                                ></div>
                                <span className="bar-label">{item.jouwZaak}%</span>
                                <div
                                    className="bar gemiddeld"
                                    style={{width: `${item.gemiddeld}%`}}
                                ></div>
                                <span className="bar-label">{item.gemiddeld}%</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categorieen;
