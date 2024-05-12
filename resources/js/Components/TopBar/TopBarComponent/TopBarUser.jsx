import { h4FontStyle } from "@/lib/constant/Styles";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBarUser = () => {
    const navigate = useNavigate();
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
            onClick={() => navigate(`profile/McKenzie Johnson`)}
        >
            <AccountCircleOutlined />
            McKenzie Johnson
        </Button>
    );
};

export default TopBarUser;
