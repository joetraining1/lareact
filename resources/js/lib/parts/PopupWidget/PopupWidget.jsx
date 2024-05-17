import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { DataFilterOnSearch } from "@/lib/constant/TestData";
import { Button, Paper } from "@mui/material";
import React from "react";

const PopupWidget = ({ styles, close, children }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                ...styles,
                top: "100%",
                height: "250px",
                zIndex: 1,
                backgroundColor: "#fff",
                padding: "1vw",
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
            }}
        >
            {children}
            <Button
                variant="text"
                sx={{
                    ...h4FontStyle,
                    marginTop: "auto",
                    marginLeft: "auto",
                    padding: 0,
                    color: AllColors.GreenDoff,
                }}
                onClick={() => close()}
            >
                cancel
            </Button>
        </Paper>
    );
};

export default PopupWidget;
