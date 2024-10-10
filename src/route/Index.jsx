import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Offers from "../pages/offers/Offers";
import Home from "../pages/home/home";
 



const AdminPages = () => {
    return (
        <Suspense fallback={<div />}>
            <Routes>
               
                <Route
                    exact
                    path={`/`}
                    element={<Home />}
                />
                <Route
                    exact
                    path={`/offers`}
                    element={<Offers />}
                />

             </Routes>
        </Suspense>
    );
};

export { AdminPages };
