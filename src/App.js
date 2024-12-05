import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
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
import WrappedIntro from "./Wrapped/WrappedIntro";
import TopverkopersDrank from "./Wrapped/TopverkopersDrank";
import PrijsOptimalisatie from "./Wrapped/PrijsOptimalisatie";
import PrijsVergelijking from "./Wrapped/PrijsVergelijking";
import Specialiteit from "./Wrapped/Specialiteit";
import DashboardLanding from "./Dashboard/DashboardLanding";
import Categorieen from "./Wrapped/Categorieen";
import TopverkopersEten from "./Wrapped/TopverkopersEten";
import StijgersDrank from "./Wrapped/StijgersDrank";
import StijgersEten from "./Wrapped/StijgersEten";
import HotForYou from "./Wrapped/HotForYou";
import HotForNextSeason from "./Wrapped/HotForNextSeason";

const wrappedRoutes = [
    "/wrapped1",
    "/wrapped2",
    "/wrapped3",
    "/wrapped4",
    "/wrapped5",
    "/wrapped6",
    "/wrapped7",
    "/wrapped8",
    "/wrapped9",
    "/wrapped10",
    "/wrapped11",
];


function WrappedNavigator({ currentPath }) {
    const navigate = useNavigate();

    const handleNavigation = (direction) => {
        const currentIndex = wrappedRoutes.indexOf(currentPath);
        if (direction === "next" && currentIndex < wrappedRoutes.length - 1) {
            navigate(wrappedRoutes[currentIndex + 1]);
        } else if (direction === "prev" && currentIndex > 0) {
            navigate(wrappedRoutes[currentIndex - 1]);
        }
    };

    return (
        <div
            className="navigator-container"
            onClick={(e) => {
                const screenWidth = window.innerWidth;
                if (e.clientX > screenWidth / 2) {
                    handleNavigation("next");
                } else {
                    handleNavigation("prev");
                }
            }}
            style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1000 }}
        />
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/welcomepage" element={<WelcomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/typehoreca" element={<TypeHoreca />} />
                <Route path="/zitplaatsen" element={<Zitplaatsen />} />
                <Route path="/kenmerken" element={<Kenmerken />} />
                <Route path="/leeftijdsverdeling" element={<Leeftijdsverdeling />} />
                <Route path="/profielverdeling" element={<Profielverdeling />} />
                <Route path="/personas" element={<Personas />} />
                <Route path="/clienteleanalysis" element={<ClienteleAnalysis />} />
                <Route path="/toerisme" element={<ToerismeAnalysis />} />
                <Route path="/uploadmenu" element={<UploadMenu />} />
                <Route path="/menufrequency" element={<MenuFrequency />} />
                <Route path="/promoties" element={<Promoties />} />
                <Route path="/marketingstrategy" element={<MarketingStrategy />} />
                <Route path="/dashboard" element={<DashboardLanding/>}/>
                {wrappedRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route}
                        element={
                            <>
                                <WrappedNavigator currentPath={route} />
                                {index === 0 && <WrappedIntro />}
                                {index === 1 && <TopverkopersDrank />}
                                {index === 2 && <TopverkopersEten/>}
                                {index === 3 && <StijgersDrank/>}
                                {index === 4 && <StijgersEten/>}
                                {index === 5 && <PrijsOptimalisatie />}
                                {index === 6 && <PrijsVergelijking />}
                                {index === 7 && <Specialiteit />}
                                {index === 8 && <HotForYou />}
                                {index === 9 && <HotForNextSeason />}
                                {index === 10 && <Categorieen />}
                            </>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
