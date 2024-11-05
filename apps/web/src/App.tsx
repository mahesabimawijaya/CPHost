// import RegisterModal from "./components/organisms/RegisterModal";
// import { TawkToChat } from "./components/TawkToChat";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HostingPage from "./components/pages/HostingPage";
import DomainPage from "./components/pages/DomainPage";
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/hosting" element={<HostingPage />} />
        <Route path="/domain" element={<DomainPage />} />
      </Routes>
    </>
  );
}

export default App;
