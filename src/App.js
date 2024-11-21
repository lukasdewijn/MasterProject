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
import WrappedIntro from "./Wrapped/WrappedIntro"
import TopverkopersDrank from "./Wrapped/TopverkopersDrank";
import PrijsOptimalisatie from "./Wrapped/PrijsOptimalisatie";
import PrijsVergelijking from "./Wrapped/PrijsVergelijking";
import Specialiteit from "./Wrapped/Specialiteit";
import HotForNextSeason from "./Wrapped/HotForNextSeason";
import Categorieen from "./Wrapped/Categorieen";
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
                <Route path="/wrapped1" element ={<WrappedIntro/>}/>
                <Route path="/wrapped2" element ={<TopverkopersDrank/>}/>
                <Route path="/wrapped3" element ={<PrijsOptimalisatie/>}/>
                <Route path="/wrapped4" element ={<PrijsVergelijking/>}/>
                <Route path="/wrapped5" element ={<Specialiteit/>}/>
                <Route path="/wrapped6" element ={<HotForNextSeason/>}/>
                <Route path="/wrapped7" element ={<Categorieen/>}/>
            </Routes>
        </Router>
    );
}

export default App;
