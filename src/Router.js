import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage"
import SelectPlacePage from "./pages/SelectPlacePage";
import ResultPage from "./pages/ResultPage";
import ErrorPage from "./pages/ErrorPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/select/place" element={<SelectPlacePage />} />
                <Route exact path="/select/another" element={<ErrorPage />} />
                <Route exact path="/result/:id" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;