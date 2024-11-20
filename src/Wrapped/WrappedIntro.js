import React from 'react';
import './WrappedIntro.css';

const WrappedIntro = () => {
    return (
        <div className="wrapped-intro-container">
            <div className="card-stack">

                <div className="card biceblue">
                    <div className="card-content">
                        <h1 className="title">Wrapped</h1>
                        <p>Zomer</p>
                    </div>
                </div>
                <div className="card lightcyan"></div>
                <div className="card jordyblue"></div>
                <div className="card ivory"></div>
                <div className="card sandybrown"></div>
            </div>
        </div>
    );
};

export default WrappedIntro;
