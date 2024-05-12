import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { DataFilterOnSearch } from "@/lib/constant/TestData";
import { Button, Paper } from "@mui/material";
import React from "react";

const PopupWidget = ({ keyword, styles, close, action }) => {
    return (
        <Paper
            elevation={3}
            style={{
                ...styles,
                top: "100%",
                height: "250px",
                zIndex: 1,
                backgroundColor: "#fff",
                padding: "1vw",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {DataFilterOnSearch.map((item, index) => {
                return item.includes(keyword) ? (
                    <span
                        key={index}
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            action(item);
                            return close();
                        }}
                    >
                        {item}
                    </span>
                ) : null;
            })}
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
