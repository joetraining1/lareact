import { AllColors } from "@/lib/constant/Colors";
import { SiteMenu } from "@/lib/constant/Menus";
import { SideSx, h4FontStyle } from "@/lib/constant/Styles";
import SideItem from "@/lib/parts/SideItem/SideItem";
import UserServices from "@/lib/services/User/UserServices";
import { slideOut } from "@/redux/slices/sidebarSlice";
import { DirectionsRunRounded, StorageRounded } from "@mui/icons-material";
import { Box, Button, Divider, Drawer } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
    const open = useSelector((state) => state.sidebar.sidebarState.open);

    const { signout } = UserServices();

    return (
        <Drawer variant="persistent" open={open}>
            <Box
                sx={{
                    width: SideSx.width,
                    backgroundColor: "#fff",
                    padding: "calc(5vh + 1vw) 0 2vw 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    height: "100%",
                }}
            >
                {SiteMenu.map((item, index) => {
                    return (
                        <SideItem
                            key={item.id}
                            id={item.id}
                            path={item.path}
                            title={item.title}
                            icon={<item.icon />}
                        />
                    );
                })}
                <Divider />
                <SideItem
                    id={"master-data"}
                    path={"master"}
                    title={"Master Data"}
                    icon={<StorageRounded />}
                />
                <Button
                    variant="text"
                    sx={{
                        ...h4FontStyle,
                        color: AllColors.GreenDoff,
                        display: "flex",
                        width: "80%",
                        justifyContent: "flex-start",
                        margin: "auto auto 0 auto",
                        gap: "1vw",
                        padding: "5px 1vw",
                    }}
                    onClick={() => signout()}
                >
                    <DirectionsRunRounded />
                    Logout
                </Button>
            </Box>
        </Drawer>
    );
};

export default SideBar;
