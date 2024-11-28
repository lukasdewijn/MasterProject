import React from 'react';
import './Categorieen.css';

const Categorieen = ({ title, subtitle, data }) => {
    // Bereken de maximale waarde
    const maxPercentage = Math.max(
        ...data.map(item => Math.max(item.jouwZaak, item.gemiddeld))
    );

    return (
        <div className="categories-page-container">
            <div className="categories-title-container">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
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
                                <div className="stat jouw-zaak">
                                    <div
                                        className="bar jouw-zaak"
                                        style={{ width: `${(item.jouwZaak / maxPercentage) * 100}%` }}
                                    ></div>
                                    <span className="bar-label">{item.jouwZaak}%</span>
                                </div>
                                <div className="stat gemiddeld">
                                    <div
                                        className="bar gemiddeld"
                                        style={{ width: `${(item.gemiddeld / maxPercentage) * 100}%` }}
                                    ></div>
                                    <span className="bar-label">{item.gemiddeld}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categorieen;