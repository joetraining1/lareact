import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Admin from "./Pages/Admin";
import MainLayout from "./Layouts/MainLayout";
import Login from "./Pages/Login";
import Documents from "./Pages/Documents";
import Purchases from "./Pages/Purchases";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import CUProduct from "./Pages/Product/CUProduct";
import PageLayout from "./Layouts/PageLayout";
import CUUser from "./Pages/User/CUUser";
import CUArchive from "./Pages/Archive/CUArchive";
import CUPurchase from "./Pages/Purchase/CUPurchase";
import MasterData from "./Pages/MasterData";

const Home = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="login" element={<Login />} />
                <Route element={<MainLayout />}>
                    <Route index element={<Index />} />
                    <Route path="archive" element={<PageLayout />}>
                        <Route index element={<Documents />} />
                        <Route path="add" element={<CUArchive />} />
                    </Route>
                    <Route path="purchase" element={<PageLayout />}>
                        <Route index element={<Purchases />} />
                        <Route path="add" element={<CUPurchase />} />
                    </Route>
                    <Route path="product" element={<PageLayout />}>
                        <Route index element={<Products />} />
                        <Route path="add" element={<CUProduct />} />
                    </Route>
                    <Route path="user" element={<PageLayout />}>
                        <Route index element={<Users />} />
                        <Route path="add" element={<CUUser />} />
                    </Route>
                    <Route path="master" element={<PageLayout />}>
                        <Route index element={<MasterData />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default Home;
