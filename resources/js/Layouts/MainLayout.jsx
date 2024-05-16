import SideBar from "@/Components/SideBar/SideBar";
import TopBar from "@/Components/TopBar/TopBar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
    const user = useSelector((state) => state.auth.authState);
    const navigate = useNavigate();

    useEffect(() => {
        !user.user_id && !user.token && navigate("/login");
    }, [user]);

    return (
        <React.Fragment>
            <TopBar />
            <div
                style={{
                    height: "100%",
                    overflow: "auto",
                    display: "flex",
                    paddingTop: "5svh",
                    width: "100%",
                    justifyContent: "space-evenly",
                }}
            >
                <SideBar />
                <Outlet />
            </div>
        </React.Fragment>
    );
};

export default MainLayout;
