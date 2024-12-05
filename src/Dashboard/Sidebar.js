import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({}); // Houd bij welke menu's geopend zijn

    const menuItems = [
        {
            name: 'Soft drinks',
            subItems: [
                { name: 'Coca-Cola', path: '/soft-drinks/coca-cola' },
                { name: 'Sprite', path: '/soft-drinks/sprite' },
            ],
        },
        {
            name: 'Hot drinks',
            subItems: [
                { name: 'Coffee', path: '/hot-drinks/coffee' },
                { name: 'Tea', path: '/hot-drinks/tea' },
            ],
        },
        {
            name: 'Cocktail',
            subItems: [
                { name: 'Mojito', path: '/cocktail/mojito' },
                { name: 'Margarita', path: '/cocktail/margarita' },
            ],
        },
        { name: 'Top & worst sellers', path: '/top-worst' },
        { name: 'Gainers & losers', path: '/gainers-losers' },
        { name: 'Hot', path: '/hot' },
        { name: 'Hot for season', path: '/hot-season' },
        { name: 'Promotions', path: '/promotions' },
        { name: 'Price comparison', path: '/price-comparison' },
        { name: 'Price optimisation', path: '/price-optimisation' },
        { name: 'Segment sizes', path: '/segment-sizes' },
    ];

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <nav className="sidebar">
            {/* Header */}
            <div className="sidebar-header">Billy</div>

            {/* Menu */}
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        {item.subItems ? (
                            <>
                                <button
                                    className="menu-toggle"
                                    onClick={() => toggleMenu(index)}
                                >
                                    {item.name}
                                    <span className="arrow">
                                        {openMenus[index] ? '▼' : '▶'}
                                    </span>
                                </button>
                                {openMenus[index] && (
                                    <ul className="submenu">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex} className="submenu-item">
                                                <a href={subItem.path}>{subItem.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <a href={item.path}>{item.name}</a>
                        )}
                    </li>
                ))}
            </ul>

            {/* Footer */}
            <div className="sidebar-footer">Footer Content</div>
        </nav>
    );
};

export default Sidebar;
