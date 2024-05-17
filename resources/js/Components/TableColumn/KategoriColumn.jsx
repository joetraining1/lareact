import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import KategoriForm from "../Forms/KategoriForm";

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
                field: "kategori_name",
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
                renderCell: ({
                    row: { kategori_id, kategori_name, kategori_deskripsi },
                }) => {
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
                                <KategoriForm
                                    id={kategori_id}
                                    name={kategori_name}
                                    deskripsi={kategori_deskripsi}
                                />
                            </IndexModal>
                        </SectionDivider>
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
