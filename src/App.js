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
            </Routes>
        </Router>
    );
}

export default App;
