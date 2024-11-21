import React from 'react';
import './HotForNextSeason.css';

// Import persona images
import Budgetbewust from '../profielen/Budgetbewust.png';
import LocalLover from '../profielen/Local-Lover.png';
import MilieuBewuste from '../profielen/Milieubewuste.png';
import Trendvolger from '../profielen/Trendvolger.png';
import FijnProever from '../profielen/Fijn-proever.png';
import Luxezoeker from '../profielen/Luxezoeker.png';

const personas = {
    "Budgetbewust": Budgetbewust,
    "Local-Lover": LocalLover,
    "Milieu-bewuste": MilieuBewuste,
    "Trendvolger": Trendvolger,
    "Fijn-Proever": FijnProever,
    "Luxezoeker": Luxezoeker,
};

const menuItems = [
    {
        name: "Stella Artois",
        description: "Bier v/d maand",
        personas: ["Local-Lover", "Budgetbewust"],
    },
    {
        name: "Ijs-Koffie",
        description: "1+1 gratis",
        personas: ["Trendvolger", "Milieu-bewuste"],
    },
    {
        name: "Pornstar Martini",
        description: "Gratis glas",
        personas: ["Luxezoeker", "Fijn-Proever"],
    },
];

const HotForNextSeason = () => {
    return (
        <div className="hot-container">
            <div className="hot-title-container">
                <h1>Hot for next season</h1>
                <h2>Topmenu-items aanbevolen voor jouw zaak.</h2>
            </div>
            {menuItems.map((item, index) => (
                <div key={index} className="hot-item">
                    <div className="hot-item-info">
                        <div className="hot-item-name">{item.name}</div>
                        <div className="hot-item-description">{item.description}</div>
                    </div>
                    <div className="hot-item-personas">
                        {item.personas.map((persona, idx) => (
                            <div key={idx} className="persona">
                                <img
                                    src={personas[persona]}
                                    alt={persona}
                                    className="persona-image"
                                />
                                <div className="persona-name">{persona}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HotForNextSeason;
