import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

const UserColumn = (data) => {
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
                headerName: "Nama",
                width: 250,
            },
            {
                field: "email",
                headerName: "Email User",
                width: 250,
            },
            {
                field: "kontak",
                headerName: "Kontak",
                width: 250,
            },
            {
                field: "alamat",
                headerName: "Alamat",
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

export default UserColumn;
