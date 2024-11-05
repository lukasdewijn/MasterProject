import React from 'react';
import Layout from './layoutOnboarding.js';
import './Basisinformatie.css'
import { useNavigate } from 'react-router-dom';

const Basisinformatie = () => {
    const navigate = useNavigate();

    return (
        <Layout title="Contactinformatie" progress={20}>
            <div className="form-container">
                <div className="form-section">
                    <label>Voornaam Manager</label>
                    <input type="text" placeholder="Voornaam Manager"/>
                </div>
                <div className="form-section">
                    <label>Achternaam Manager</label>
                    <input type="text" placeholder="Achternaam Manager"/>
                </div>
                <div className="form-section">
                    <label>Naam Horecazaak</label>
                    <input type="text" placeholder="Naam Horecazaak"/>
                </div>
                <div className="form-section">
                    <label>Adress</label>
                    <input type="text" placeholder="Adress"/>
                </div>
                <div className="form-section">
                    <label>Telefoonnummer</label>
                    <input type="text" placeholder="Telefoonnummer"/>
                </div>
                <div className="form-section">
                    <label>E-mail</label>
                    <input type="text" placeholder="E-mail"/>
                </div>
            </div>
            <div className="start-button-container">
                <button className="start-button" onClick={() => navigate('/typehoreca')}>>Volgende</button>
            </div>
        </Layout>
    );
};

export default Basisinformatie;
