import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { Typography } from "@mui/material";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import { useNavigate } from "react-router-dom";

const ProductColumn = ({ data = [], addition = [], refresh }) => {
    const navigate = useNavigate();

    const typeColumn = [
        {
            field: "id",
            headerName: "No.",
            filterable: false,
            width: 50,
            renderCell: (params) =>
                `${params.api.getAllRowIds().indexOf(params.id) + 1}.`,
        },
        {
            field: "product_id",
            headerName: "ID Product",
            width: 150,
        },
        {
            field: "product_name",
            headerName: "Nama Produk",
            width: 200,
        },
        ...addition,
        {
            field: "kategori_name",
            headerName: "Kategori",
            width: 150,
        },
        {
            field: "product_harga",
            headerName: "Harga Produk : Rp",
            width: 250,
            // renderCell: ({ row: { product_harga } }) => {
            //     return <Typography>{product_harga}</Typography>;
            // },
        },
        {
            field: "product_deskripsi",
            headerName: "Deskripsi Produk",
            width: 250,
        },
        {
            field: "option",
            headerName: "Option",
            width: 150,
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
                    </SectionDivider>
                );
            },
        },
    ];

    const DataColumn = useMemo(() => {
        return typeColumn;
    }, [data]);

    return {
        DataColumn,
    };
};

export default ProductColumn;
