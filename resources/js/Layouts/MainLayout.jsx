import SideBar from "@/Components/SideBar/SideBar";
import TopBar from "@/Components/TopBar/TopBar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <React.Fragment>
            <TopBar />
            <div
                style={{
                    height: "95svh",
                    overflow: "auto",
                    display: "flex",
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
