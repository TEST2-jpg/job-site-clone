import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobform from "./components/Jobform";
import React from "react";
import App from "./App";
import Card from "./components/Card";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="q/:id" element={<Card />} />
                </Route>
                <Route path="/forms" element={<Jobform />} />
                <Route path="*" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;