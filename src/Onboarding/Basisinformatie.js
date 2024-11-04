import React from 'react';
import Layout from './layoutOnboarding.js';

const Basisinformatie = () => {
    return (
        <Layout title="Contactinformatie" progress={20}>
            <div>
                <div className="form-section">
                    <label>Telefoonnummer</label>
                    <input type="text" placeholder="Telefoonnummer" />
                </div>
                <div className="form-section">
                    <label>Mobiel</label>
                    <input type="text" placeholder="Mobiel" />
                </div>
                <div className="form-section">
                    <label>Fax</label>
                    <input type="text" placeholder="Fax" />
                </div>
                <div className="form-section">
                    <label>Website</label>
                    <input type="text" placeholder="Website URL" />
                </div>
                <div className="form-section">
                    <label>Social Media</label>
                    <input type="text" placeholder="Social Media Link" />
                </div>
                <div className="start-button-container">
                    <button className="next-button">Volgende</button>
                </div>
            </div>
        </Layout>
    );
};

export default Basisinformatie;
