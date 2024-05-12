import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

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
            field: "product_nama",
            headerName: "Nama Produk",
            width: 200,
        },
        ...addition,
        {
            field: "kategori_nama",
            headerName: "Kategori",
            width: 150,
        },
        {
            field: "produk_deskripsi",
            headerName: "Deskripsi Produk",
            width: 250,
        },
        {
            field: "option",
            headerName: "Option",
            width: 150,
            renderCell: ({ row: { id, title, value } }) => {
                return (
                    <IndexModal
                        button={"option"}
                        title={"Test Table Modal"}
                        value={"modal opened"}
                    >
                        {title}
                    </IndexModal>
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
