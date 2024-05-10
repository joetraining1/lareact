import PurchaseColumn from "@/Components/TableColumn/PurchaseColumn";
import TableData from "@/Components/TableData/TableData";
import { PurchaseData } from "@/lib/constant/TestData";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const Purchases = () => {
    const navigate = useNavigate();
    const { DataColumn } = PurchaseColumn(PurchaseData);
    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Purchase Order"}
                    value={
                        "Kelola Purchasing Order pengadaan barang di perusahaan."
                    }
                />
                <SiteButton
                    title={"Add Order"}
                    action={() => navigate("add")}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Belanja Perusahaan"}
                    value={"Informasi data belanja perusahaan."}
                />
                <TableData column={DataColumn} rows={PurchaseData} />
            </BoxContainer>
        </PageContainer>
    );
};

export default Purchases;
