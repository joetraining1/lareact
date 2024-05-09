import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";

const Index = () => {
    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Dashboard"}
                    value={"Halaman Home Aplikasi Arsip dan Purchasing"}
                />
            </BoxContainer>
        </PageContainer>
    );
};

export default Index;
