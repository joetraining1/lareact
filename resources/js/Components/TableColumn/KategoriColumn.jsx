import React, { useMemo, useState } from "react";
import IndexModal from "../Modal/IndexModal";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import KategoriForm from "../Forms/KategoriForm";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import usePage from "@/hooks/usePage";
import KategoriServices from "@/lib/services/Kategori/KategoriServices";
import { CloseRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

const KategoriColumn = ({ data, refresh }) => {
    const [dataset, setDataset] = useState([]);
    const { deleting } = KategoriServices();

    const DataColumn = [
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
            width: 250,
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
                            title={`Edit Kategori: ${kategori_id}`}
                            value={`edit data kategori ${kategori_name}`}
                        >
                            <KategoriForm
                                id={kategori_id}
                                name={kategori_name}
                                deskripsi={kategori_deskripsi}
                                refresh={() => refresh()}
                            />
                        </IndexModal>
                        <SiteButton
                            title={"delete"}
                            action={() => {
                                deleting({
                                    id: kategori_id,
                                });
                                refresh();
                            }}
                        />
                    </SectionDivider>
                );
            },
        },
    ];

    return {
        DataColumn,
        setDataset,
    };
};

export default KategoriColumn;
