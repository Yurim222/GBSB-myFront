import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage"
import ResultPage from "./pages/ResultPage";
import SelectAnotherPage from "./pages/SelectAnotherPage"
import LoginPage from "./pages/LoginPage";
import SelectPlacePage from "./pages/SelectPlacePage"
import DayonePage from "./pages/DayonePage";
import "./styles/global.css"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/select/place" element={<SelectPlacePage />} />
                <Route exact path="/select/another" element={<SelectAnotherPage />} />
                <Route exact path="/result" element={<ResultPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/result/day1" element={<DayonePage/>} />
                <Route exact path="/result/day2" element={<DayonePage/>} />
                <Route exact path="/result/day3" element={<DayonePage/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;