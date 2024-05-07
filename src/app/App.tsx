import { LandingPage } from "../pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../pages/sections/1navigation/NavBar";

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </>
  );
}
