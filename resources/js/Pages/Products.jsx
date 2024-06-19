import { SectionDivider } from "@/Components/SectionContainer/SectionContainer";
import ProductColumn from "@/Components/TableColumn/ProductColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import PageContainer from "@/lib/parts/PageContainer/PageContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import ProductServices from "@/lib/services/Product/ProductServices";
import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const { resp, isFetching, forceRefresh } = useGetFetch("products");
    const { deleting } = ProductServices();

    const { DataColumn } = ProductColumn({
        refresh: () => forceRefresh(),
        option: [
            {
                field: "option",
                headerName: "Option",
                width: 250,
                renderCell: ({ row: { product_id } }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <SiteButton
                                title={"edit"}
                                action={() => navigate(`${product_id}`)}
                            />
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: product_id,
                                    });
                                    forceRefresh();
                                    return;
                                }}
                            />
                        </SectionDivider>
                    );
                },
            },
        ],
    });

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
                <TableData
                    column={DataColumn}
                    rows={resp ? resp.data : []}
                    loading={isFetching}
                />
            </BoxContainer>
        </PageContainer>
    );
};

export default Products;
