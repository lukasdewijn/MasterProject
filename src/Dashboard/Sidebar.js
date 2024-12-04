import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: 'Soft drinks', path: '/soft-drinks' },
        { name: 'Hot drinks', path: '/hot-drinks' },
        { name: 'Cocktail', path: '/cocktail' },
        { name: 'Top & worst sellers', path: '/top-worst' },
        { name: 'Gainers & losers', path: '/gainers-losers' },
        { name: 'Hot', path: '/hot' },
        { name: 'Hot for season', path: '/hot-season' },
        { name: 'Promotions', path: '/promotions' },
        { name: 'Price comparison', path: '/price-comparison' },
        { name: 'Price optimisation', path: '/price-optimisation' },
        { name: 'Segment sizes', path: '/segment-sizes' },
    ];

    return (
        <nav style={{ width: '250px', backgroundColor: '#002147', padding: '1rem' }}>
            <h1 style={{ color: '#fff', fontSize: '1.5rem' }}>Billy</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {menuItems.map((item, index) => (
                    <li key={index} style={{ margin: '1rem 0' }}>
                        <NavLink
                            to={item.path}
                            style={({ isActive }) => ({
                                color: isActive ? '#FFA500' : '#fff',
                                textDecoration: 'none',
                                fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Sidebar;
