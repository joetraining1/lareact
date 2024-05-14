import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import ApiClient from "@/lib/services/ApiClient";
import React, { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        const testApi = async () => {
            const req = await ApiClient.get("auth/home-welcome").then((res) => {
                return res.data;
            });

            console.log(req);

            return req;
        };
        testApi();
        return;
    }, []);

    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Dashboard"}
                    value={"Halaman Home Aplikasi Arsip dan Purchasing"}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"Checklist"} />
                <ul>
                    <li>1. - Communicator</li>
                    <li>2. - Harvester</li>
                    <li>3. - Preservator</li>
                    <li>4. - Processor</li>
                    <li>5. - Manipulator</li>
                    <li>6. Presenter</li>
                    <li>7. Navigator</li>
                </ul>
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
            <BoxContainer>
                <SectionHeader title={"Data Flow Diagram"} />
                <ul>
                    <li>1. user, user_profile, user_employment</li>
                    <li>2. departemen</li>
                    <li>3. kategori</li>
                    <li>4. product</li>
                    <li>5. supplier</li>
                    <li>6. document, document_info</li>
                    <li>7. order, order_item</li>
                    <li>8. transaksi</li>
                    <li>9. shipment</li>
                </ul>
            </BoxContainer>
        </PageContainer>
    );
};

export default Index;
