// import RegisterModal from "./components/organisms/RegisterModal";
// import { TawkToChat } from "./components/TawkToChat";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HostingPage from "./components/pages/HostingPage";
import DomainPage from "./components/pages/DomainPage";
import ContactUsPage from "./components/pages/ContactUsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/domain" element={<DomainPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
