import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";

const KategoriColumn = (data) => {
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
                field: "kategori_id",
                headerName: "ID Kategori",
                width: 150,
            },
            {
                field: "kategori_nama",
                headerName: "Nama Kategori",
                width: 250,
            },
            {
                field: "kategori_deskripsi",
                headerName: "Deskripsi Kategori",
                width: 350,
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

export default KategoriColumn;
