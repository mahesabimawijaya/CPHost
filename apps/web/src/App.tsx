// import RegisterModal from "./components/organisms/RegisterModal";
// import { TawkToChat } from "./components/TawkToChat";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HostingPage from "./components/pages/HostingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/hosting" element={<HostingPage />} />
      </Routes>
    </>
  );
}

export default App;
