import { AllColors } from "@/lib/constant/Colors";
import { SideSx, h4FontStyle } from "@/lib/constant/Styles";
import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
    return (
        <div
            style={{
                width: SideSx.width,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    ...h4FontStyle,
                    fontWeight: "700",
                }}
            >
                LOGO:
                <span
                    style={{
                        color: AllColors.Yellow,
                    }}
                >
                    APP
                </span>
            </Typography>
        </div>
    );
};

export default Logo;
