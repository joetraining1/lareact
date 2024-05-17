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
import Kategori from "./Pages/MasterData/Kategori";
import Supplier from "./Pages/MasterData/Supplier";
import Departemen from "./Pages/MasterData/Departemen";
import Shipment from "./Pages/MasterData/Shipment";
import Transaksi from "./Pages/MasterData/Transaksi";
import Progress from "./Pages/Purchase/Progress";
import Profile from "./Pages/Profile";
import Employment from "./Pages/MasterData/Employment";
import RegisterForm from "./Components/Forms/RegisterForm";
import LoginForms from "./Components/Forms/LoginForms";
import VisitorLayout from "./Layouts/VisitorLayout";

const Home = () => {
    return (
        <Routes>
            <Route path="/">
                <Route element={<Login />}>
                    <Route path="login" element={<LoginForms />} />
                    <Route path="register" element={<RegisterForm />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route index element={<Index />} />
                    <Route path="profile/:user_id" element={<PageLayout />}>
                        <Route index element={<Profile />} />
                    </Route>
                    <Route path="archive" element={<PageLayout />}>
                        <Route index element={<Documents />} />
                        <Route path="add" element={<CUArchive />} />
                        <Route
                            path="edit/:document_id"
                            element={<CUArchive />}
                        />
                    </Route>
                    <Route path="purchase" element={<PageLayout />}>
                        <Route index element={<Purchases />} />
                        <Route path="add" element={<CUPurchase />} />
                        <Route path=":order_id" element={<Progress />} />
                    </Route>
                    <Route path="product" element={<PageLayout />}>
                        <Route index element={<Products />} />
                        <Route path="add" element={<CUProduct />} />
                        <Route path="edit/:user_id" element={<CUProduct />} />
                    </Route>
                    <Route path="user" element={<PageLayout />}>
                        <Route index element={<Users />} />
                        <Route path="add" element={<CUUser />} />
                        <Route path="edit/:user_id" element={<CUUser />} />
                    </Route>
                    <Route path="master" element={<PageLayout />}>
                        <Route index element={<MasterData />} />
                        <Route path="kategori" element={<Kategori />} />
                        <Route path="supplier" element={<Supplier />} />
                        <Route path="departemen" element={<Departemen />} />
                        <Route path="shipment" element={<Shipment />} />
                        <Route path="transaksi" element={<Transaksi />} />
                        <Route path="employment" element={<Employment />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<VisitorLayout />} />
        </Routes>
    );
};

export default Home;
