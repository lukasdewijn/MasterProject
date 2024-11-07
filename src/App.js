import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Onboarding/WelcomePage';
import ContactPage from './Onboarding/Basisinformatie';
import TypeHoreca from "./Onboarding/TypeHoreca";
import Zitplaatsen from "./Onboarding/Zitplaatsen";
import Kenmerken from "./Onboarding/Kenmerken";
import Leeftijdsverdeling from "./Onboarding/Leeftijdsverdeling";
import Profielverdeling from "./Onboarding/Profielverdeling";
import Personas from "./Onboarding/Personas";
import ClienteleAnalysis from "./Onboarding/ClienteleAnalysis";
import ToerismeAnalysis from "./Onboarding/ToerismeAnalysis";
import UploadMenu from "./Onboarding/UploadMenu";
import MenuFrequency from "./Onboarding/MenuFrequency";
import Promoties from "./Onboarding/Promoties";
import MarketingStrategy from "./Onboarding/MarketingStrategy"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} /> {/* Default route */}
                <Route path="/welcomepage" element={<WelcomePage />} /> {/* Optional route to access it directly */}
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/typehoreca" element={<TypeHoreca />} />
                <Route path="/zitplaatsen" element={<Zitplaatsen/>} />
                <Route path="/kenmerken" element={<Kenmerken/>} />
                <Route path="/leeftijdsverdeling" element={<Leeftijdsverdeling/>} />
                <Route path="/profielverdeling" element={<Profielverdeling/>} />
                <Route path="/personas" element={<Personas/>} />
                <Route path="/clienteleanalysis" element={<ClienteleAnalysis/>} />
                <Route path="/toerisme" element ={<ToerismeAnalysis/>} />
                <Route path="/uploadmenu" element ={<UploadMenu/>} />
                <Route path="/menufrequency" element ={<MenuFrequency/>} />
                <Route path="/promoties" element ={<Promoties/>}/>
                <Route path="/marketingstrategy" element ={<MarketingStrategy/>}/>
            </Routes>
        </Router>
    );
}

export default App;
