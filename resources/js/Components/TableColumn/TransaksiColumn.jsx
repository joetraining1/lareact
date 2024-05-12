import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

const TransaksiColumn = ({ data = [], addition = [] }) => {
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
            ...addition,
            {
                field: "transaksi_id",
                headerName: "ID Transaksi",
                width: 150,
            },
            {
                field: "document_id",
                headerName: "Dokumen",
                width: 150,
            },
            {
                field: "supplier_nama",
                headerName: "Supplier",
                width: 250,
            },
            {
                field: "transaksi_cost",
                headerName: "Biaya Transaksi",
                width: 250,
            },
            {
                field: "transaksi_date",
                headerName: "Tanggal Transaksi",
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

export default TransaksiColumn;
