import { h4FontStyle } from "@/lib/constant/Styles";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopBarUser = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.authState);

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
            onClick={() => navigate(`profile/${user.user_id}`)}
        >
            <AccountCircleOutlined />
            {user.user_id}
        </Button>
    );
};

export default TopBarUser;
