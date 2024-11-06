import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HostingPage from "./components/pages/HostingPage";
import DomainPage from "./components/pages/DomainPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import NewsGridPage from "./components/pages/NewsGridPage";
import NewsDetailsPage from "./components/pages/NewsDetailsPage";

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
        <Route path="/news-grid" element={<NewsGridPage />} />
        <Route path="/news-detail" element={<NewsDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
