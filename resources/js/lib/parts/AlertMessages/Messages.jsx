import { AllColors } from "@/lib/constant/Colors";
import { h4FontStyle } from "@/lib/constant/Styles";
import { TipsAndUpdatesRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";

const Messages = () => {
    const SuccessMessage = ({ msg }) => {
        return (
            <Typography
                variant="body2"
                sx={{
                    fontStyle: "italic",
                    color: "green",
                    ...h4FontStyle,
                    backgroundColor: `${AllColors.GrassGreen}70`,
                    padding: "5px 10px",
                    border: "1px solid green",
                    borderRadius: "3px",
                    gap: "1vw",
                }}
            >
                <TipsAndUpdatesRounded
                    sx={{
                        fontSize: "1em",
                    }}
                />
                {msg}
            </Typography>
        );
    };

    return {
        SuccessMessage,
    };
};

export default Messages;
