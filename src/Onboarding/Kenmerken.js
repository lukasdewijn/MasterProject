import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './layoutOnboarding';
import './Kenmerken.css';

const Kenmerken = () => {
    const navigate = useNavigate();

    // State to hold selected options for each category
    const [selectedOptions, setSelectedOptions] = useState({
        algemeenType: [],
        specialiteit: [],
        locatietype: [],
        keuken: [],
        sfeer: [],
        kenmerken: []
    });

    const categories = {
        algemeenType: ["Fine Dining", "Casual Dining", "Fast Casual", "Fast Food", "Buffet", "Café", "Bistro", "Brasserie"],
        specialiteit: ["Steakhouse", "Grill", "Seafood/Vis", "Pizzeria", "BurgerTent", "Veggie/Vegan", "BBQ", "Pannenkoeken", "Sandwichshop", "Soup & Salad"],
        locatietype: ["Stadcentrum", "Toeristisch gebied", "Zakelijk district", "Winkelcentrum", "Strand/Zee", "Luchthaven", "Hotelrestaurant"],
        keuken: ["Italiaans", "Frans", "Spaans/Tapas", "Mexicaans", "Japans/Sushi", "Chinees", "Indiaas", "Midden-Oosters", "Mediterraans", "Amerikaans", "Fusion", "Thais", "Braziliaans / Zuid-Amerikaans"],
        sfeer: ["Rustiek", "Modern", "Familiegericht", "Gezellig/Huiselijk", "Formeel", "Ontspannen", "Trendy", "Retro", "Industrieel", "Romantisch", "Klassiek", "Panoramisch Uitzicht", "Tropisch"],
        kenmerken: ["Terras", "Speeltuin", "Live Muziek", "Afzonderlijke zalen/Private Dining", "Huisdieren toegestaan", "Afhaalopties", "Vegan opties", "Seizoensgebonden menu", "Duurzaam/Lokaal voedsel", "Biologisch"]
    };

    const handleOptionToggle = (category, option) => {
        setSelectedOptions(prevState => {
            const selected = prevState[category];
            const isSelected = selected.includes(option);
            return {
                ...prevState,
                [category]: isSelected ? selected.filter(item => item !== option) : [...selected, option]
            };
        });
    };

    return (
        <Layout title="Kenmerken" progress={60}>
            <div className="kenmerken-container">
                <h1 style={{marginBottom: "1rem" }}>Duid alle kenmerken aan die bij uw zaak passen.</h1>
                <div className="kenmerken-groepen">
                    {Object.keys(categories).map((category, index) => (
                        <div key={index} className="category-section">
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h2>
                            <div className="button-group">
                                {categories[category].map((option, idx) => (
                                    <button
                                        key={idx}
                                        className={`option-button-kenmerken ${selectedOptions[category].includes(option) ? 'selected' : ''}`}
                                        onClick={() => handleOptionToggle(category, option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/leeftijdsverdeling')}>Volgende</button>
            </div>
        </Layout>
    );
};

export default Kenmerken;
