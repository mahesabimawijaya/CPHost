// import RegisterModal from "./components/organisms/RegisterModal";
// import { TawkToChat } from "./components/TawkToChat";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HostingPage from "./components/pages/HostingPage";
import DomainPage from "./components/pages/DomainPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import TeamPage from "./components/pages/TeamPage";
import ServicesPage from "./components/pages/ServicesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/domain" element={<DomainPage />} />
      </Routes>
    </>
  );
}

export default App;
