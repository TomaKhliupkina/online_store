import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import Shop from "../pages/Shop";

const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            )}
            {publicRoutes.map(({path, element}) =>
                <Route
                    key={path}
                    path={path}
                    element={element}
                />
            )}
            <Route
                path='*'
                element={<Shop/>}
            />
        </Routes>
    );
};

export default AppRouter;