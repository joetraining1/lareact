import { AllColors } from "@/lib/constant/Colors";
import { AllSize, h4FontStyle } from "@/lib/constant/Styles";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import { BoxContainer } from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { urlFilter } from "@/lib/utils/Regex";
import { ArrowBackRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const SectionContainer = ({ children, url }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const nav = urlFilter(location.pathname);

    const currentPath = location.pathname.match(/.*\/(.*)$/);

    return (
        <PageContainer>
            <BoxContainer
                styles={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <SiteButton
                    title={"Back"}
                    icon={<ArrowBackRounded />}
                    styles={{
                        width: "100px",
                    }}
                    variant={"text"}
                    action={() =>
                        navigate(url, {
                            replace: true,
                        })
                    }
                />
                <Button
                    variant="text"
                    sx={{
                        ...h4FontStyle,
                        color: AllColors.GreenDoff,
                    }}
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>
                /
                {nav.map((item, index) => {
                    if (currentPath.includes(item)) {
                        return (
                            <Typography
                                key={`nav-item-${item}`}
                                sx={{
                                    ...h4FontStyle,
                                    color: AllColors.DarkGrey,
                                }}
                            >
                                {item}
                            </Typography>
                        );
                    }
                    return (
                        <React.Fragment key={`nav-step-${item}`}>
                            <Button
                                variant="text"
                                sx={{
                                    ...h4FontStyle,
                                    color: AllColors.GreenDoff,
                                }}
                                onClick={() => navigate(`/${item}`)}
                            >
                                {item}
                            </Button>
                            /
                        </React.Fragment>
                    );
                })}
            </BoxContainer>
            {children}
        </PageContainer>
    );
};

export default SectionContainer;

export const SectionDivider = ({ children, styles }) => {
    return (
        <div
            style={{
                ...AllSize,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                ...styles,
            }}
        >
            {children}
        </div>
    );
};
