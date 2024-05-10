import { AllColors } from "@/lib/constant/Colors";
import { AppBar, Button } from "@mui/material";
import React from "react";
import Logo from "./TopBarComponent/Logo";
import TopBarUser from "./TopBarComponent/TopBarUser";
import SideBurger from "@/lib/parts/SideBurger/SideBurger";

const TopBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                height: "5vh",
                width: "100%",
                backgroundColor: AllColors.GreenDoff,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Logo />
            <div
                style={{
                    width: "85vw",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 2vw",
                }}
            >
                <SideBurger />
                <TopBarUser />
            </div>
        </AppBar>
    );
};

export default TopBar;
