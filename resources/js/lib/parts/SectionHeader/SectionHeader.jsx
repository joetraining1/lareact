import { AllColors } from "@/lib/constant/Colors";
import { BoxStyleBasic, h4FontStyle } from "@/lib/constant/Styles";
import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ styles, title, value }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                ...styles,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    ...h4FontStyle,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontFamily: h4FontStyle.fontFamily,
                    fontWeight: "400",
                    color: AllColors.GreyScale,
                }}
            >
                {value}
            </Typography>
        </div>
    );
};

export default SectionHeader;

export const BoxContainer = ({ children, styles }) => {
    return (
        <Box
            sx={{
                ...BoxStyleBasic,
                ...styles,
            }}
        >
            {children}
        </Box>
    );
};
