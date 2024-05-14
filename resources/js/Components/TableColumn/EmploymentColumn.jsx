import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

const EmploymentColumn = (data) => {
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
                field: "user_id",
                headerName: "ID User",
                width: 150,
            },
            {
                field: "nama",
                headerName: "Nama Pegawai",
                width: 150,
            },
            {
                field: "departemen_id",
                headerName: "ID Departemen",
                width: 150,
            },
            {
                field: "departemen_nama",
                headerName: "Nama Departemen",
                width: 250,
            },
            {
                field: "jabatan",
                headerName: "Jabatan Pegawai",
                width: 250,
            },
            {
                field: "posisi",
                headerName: "Posisi Pegawai",
                width: 250,
            },
            {
                field: "lokasi",
                headerName: "Lokasi Departemen",
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

export default EmploymentColumn;
