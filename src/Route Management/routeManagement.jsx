// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutManagement from "../Components/Layout/layoutManagement";
import LandingPage from '../pages/Landing Page/landingPage'
import ProfilCompany from "../pages/Profil Company/profilCompany";
import OurProducts from "../pages/Our Products/ourProducts";

const routeManagement = () => {
    // const navigate = useNavigate();
    // // const pathName = window.location.pathname;

    return (

        <LayoutManagement>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/profile-company" element={<ProfilCompany />} />
                <Route path="/products" element={<OurProducts />} />
            </Routes>
        </LayoutManagement>
    );
};

export default routeManagement;
