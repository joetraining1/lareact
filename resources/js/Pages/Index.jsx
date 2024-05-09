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
            <BoxContainer>
                <SectionHeader title={"Things Needed To be Done"} />
                <ul>
                    <li>1. Complete Archiving Feature</li>
                    <li>2. Complete User Feature</li>
                    <li>3. Complete Purchase Order Feature</li>
                    <li>4. Complete Master Data</li>
                    <li>5. Table Column</li>
                    <li>6. Feature Sequence</li>
                    <li>7. Auth</li>
                    <li>8. Guest Page</li>
                </ul>
            </BoxContainer>
        </PageContainer>
    );
};

export default Index;
