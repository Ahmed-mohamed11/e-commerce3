import { Routes, Route } from "react-router-dom";
 import { Suspense } from "react";
 import Offers from "../pages/offers/Offers";
import Home from "../pages/home/home";
import Error404Modern from "../pages/error/404-modern";
 



const AdminPages = ( ) => {
    return (
        <Suspense fallback={<div />}>
            <Routes>
               
                <Route
                    exact
                    path={`/home`}
                    element={<Home />}
                />
                <Route
                    exact
                    path={`/offers`}
                    element={<Offers />}
                />
                
                <Route path={"/*"} element={<Error404Modern />} />
            </Routes>
        </Suspense>
    );
};

export { AdminPages };
