import ProductColumn from "@/Components/TableColumn/ProductColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const { DataColumn } = ProductColumn({});
    const { resp, current, isError } = useGetFetch("products");
    return (
        <PageContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Produk "}
                    value={
                        "Kelola produk atau barang yang digunakan dalam perusahaan."
                    }
                />
                <SiteButton
                    title={"Add Product"}
                    action={() => navigate("add")}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Produk"}
                    value={"Keseluruhan data produk."}
                />
                <TableData column={DataColumn} rows={resp ? resp.data : []} />
            </BoxContainer>
        </PageContainer>
    );
};

export default Products;
