// import des modules necessaires
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Apropos, Logement } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'
import Page404 from '@/Pages/Public/Page_404/Page_404'

// fonction de routage des pages publique
const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;