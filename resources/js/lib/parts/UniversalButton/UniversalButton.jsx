import { ButtonStyleBasic, h4FontStyle } from "@/lib/constant/Styles";
import { Button } from "@mui/material";
import React from "react";

const UniversalButton = ({ styles, action, icon, title, variant }) => {
    const def = () => {
        return console.log("Please Add Some Function for this button.");
    };
    return (
        <Button
            variant={variant ? variant : "contained"}
            disableElevation
            size="small"
            startIcon={icon}
            sx={{
                ...styles,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize: "14px",
                width: "fit-content",
                padding: "5px 1vw",
                ...h4FontStyle,
            }}
            onClick={action ? () => action() : () => def()}
        >
            {title}
        </Button>
    );
};

export default UniversalButton;
