import React from 'react';
import './TopTemplate.css';

const TopTemplate = ({ topTitle, topSubtitle, topItems, bottomTitle, bottomSubtitle, bottomItems }) => {
    return (
        <div className="top-template-container">
            {/* Top Section */}
            <div className="section">
                <h1 className="section-title">{topTitle}</h1>
                <h2 className="section-subtitle">{topSubtitle}</h2>
                <div className="item-list">
                    <div className="item-1">
                        <span className="item-name">{topItems[0].name}</span>
                        <span className="item-sales">{topItems[0].sales} verkocht</span>
                    </div>
                    <div className="item-2">
                        <span className="item-name">{topItems[1].name}</span>
                        <span className="item-sales">{topItems[1].sales} verkocht</span>
                    </div>
                    <div className="item-3">
                        <span className="item-name">{topItems[2].name}</span>
                        <span className="item-sales">{topItems[2].sales} verkocht</span>
                    </div>
                    <div className="item-4">
                        <span className="item-name">{topItems[3].name}</span>
                        <span className="item-sales">{topItems[3].sales} verkocht</span>
                    </div>
                    <div className="item-5">
                        <span className="item-name">{topItems[4].name}</span>
                        <span className="item-sales">{topItems[4].sales} verkocht</span>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-template-container">
                <div className="section">
                    <h1 className="section-title">{bottomTitle}</h1>
                    <h2 className="section-subtitle">{bottomSubtitle}</h2>
                    <div className="item-list">
                        <div className="item-1 bottom-item">
                            <span className="item-name">{bottomItems[0].name}</span>
                            <span className="item-sales">{bottomItems[0].sales} verkocht</span>
                        </div>
                        <div className="item-2 bottom-item">
                            <span className="item-name">{bottomItems[1].name}</span>
                            <span className="item-sales">{bottomItems[1].sales} verkocht</span>
                        </div>
                        <div className="item-3 bottom-item">
                            <span className="item-name">{bottomItems[2].name}</span>
                            <span className="item-sales">{bottomItems[2].sales} verkocht</span>
                        </div>
                        <div className="item-4 bottom-item">
                            <span className="item-name">{bottomItems[3].name}</span>
                            <span className="item-sales">{bottomItems[3].sales} verkocht</span>
                        </div>
                        <div className="item-5 bottom-item">
                            <span className="item-name">{bottomItems[4].name}</span>
                            <span className="item-sales">{bottomItems[4].sales} verkocht</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopTemplate;
