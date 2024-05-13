import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

const SupplierColumn = (data) => {
    const DataColumn = useMemo(() => {
        return [
            {
                field: "id",
                headerName: "No.",
                filterable: false,
                width: 50,
                renderCell: (params) =>
                    `${params.api.getAllRowIds().indexOf(params.id) + 1}.`,
            },
            {
                field: "supplier_id",
                headerName: "ID Supplier",
                width: 150,
            },
            {
                field: "supplier_nama",
                headerName: "Nama Supplier",
                width: 250,
            },
            {
                field: "supplier_kontak",
                headerName: "Kontak Supplier",
                width: 250,
            },
            {
                field: "supplier_alamat",
                headerName: "Alamat Supplier",
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
    }, [data]);

    return {
        DataColumn,
    };
};

export default SupplierColumn;
