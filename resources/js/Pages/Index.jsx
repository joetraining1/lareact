import { h4FontStyle } from "@/lib/constant/Styles";
import FileUploader from "@/lib/parts/FileUploader/FileUploader";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ApiClient from "@/lib/services/ApiClient";
import { Typography } from "@mui/material";
import FormData from "form-data";
import React, { useEffect, useState } from "react";

const Index = () => {
    return (
        <PageContainer>
            <BoxContainer
                styles={{
                    transition: "all 0.3s ease",
                }}
            >
                <SectionHeader
                    title={"Dashboard"}
                    value={"Halaman Home Aplikasi Arsip dan Purchasing"}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Checklist"} />
                <ul>
                    <li>1. Communicator</li>
                    <li>2. Harvester</li>
                    <li>3. Preservator</li>
                    <li>4. Processor</li>
                    <li>5. o Manipulator</li>
                    <li>6. Presenter</li>
                    <li>7. Navigator</li>
                </ul>
            </BoxContainer>
        </PageContainer>
    );
};

export default Index;
