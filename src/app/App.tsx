import { LandingPage } from "../pages/LandingPage";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  );
}
