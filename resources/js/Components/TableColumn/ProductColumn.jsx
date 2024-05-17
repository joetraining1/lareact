import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { Typography } from "@mui/material";
import { SectionDivider } from "../SectionContainer/SectionContainer";

const ProductColumn = ({ data = [], addition = [] }) => {
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
            headerName: "Harga Produk",
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
            renderCell: ({ row: { id, title, value } }) => {
                return (
                    <SectionDivider
                        styles={{
                            alignItems: "center",
                        }}
                    >
                        <IndexModal
                            button={"option"}
                            title={"Test Table Modal"}
                            value={"modal opened"}
                        >
                            {title}
                        </IndexModal>
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
