import React from "react";
import HomePage from "./pages/HomePage";
import WatchOrder from "./pages/WatchOrder";
import AboutPage from "./pages/AboutPage";
import { Route, Routes } from "react-router";
import BgImg from "./components/shared/BgImg";

const App = () => {
    return (
        <>
            <BgImg />

            <div className="bg-neutral-950 h-screen text-white relative overflow-hidden">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route
                        path="/watch-order/anime/:id"
                        element={<WatchOrder />}
                    />
                    <Route path="/contact" element={<AboutPage />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
