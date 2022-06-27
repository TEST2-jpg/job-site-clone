import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobform from "./components/Jobform";
import React from "react";
import App from "./App";
import Details from "./components/forms/Details";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/forms" element={<Jobform />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;