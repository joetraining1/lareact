import { h4FontStyle } from "@/lib/constant/Styles";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const TopBarUser = () => {
    return (
        <Button
            variant="text"
            sx={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                ...h4FontStyle,
                gap: "10px",
                marginLeft: "auto",
            }}
        >
            <AccountCircleOutlined />
            Profile
        </Button>
    );
};

export default TopBarUser;
