// import RegisterModal from "./components/organisms/RegisterModal";
// import { TawkToChat } from "./components/TawkToChat";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
