import { ButtonStyleBasic } from "@/lib/constant/Styles";
import { Button } from "@mui/material";
import React from "react";

const SiteButton = ({ styles, action, icon, title, variant }) => {
    const def = () => {
        return console.log("Please Add Some Function for this button.");
    };
    return (
        <Button
            variant="contained"
            disableElevation
            size="small"
            startIcon={icon}
            sx={{
                ...styles,
                ...ButtonStyleBasic,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize: "14px",
            }}
            onClick={action ? () => action() : () => def()}
        >
            {title}
        </Button>
    );
};

export default SiteButton;
