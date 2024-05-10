import { AllColors } from "@/lib/constant/Colors";
import { AllSize } from "@/lib/constant/Styles";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import { BoxContainer } from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { ArrowBackRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SectionContainer = ({ children, url }) => {
    const navigate = useNavigate();
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
