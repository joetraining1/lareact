import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { Button } from "@mui/material";
import { h4FontStyle } from "@/lib/constant/Styles";
import { AllColors } from "@/lib/constant/Colors";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import DocumentServices from "@/lib/services/Document/DocumentServices";
import { useNavigate } from "react-router-dom";

const ArchiveColumn = ({ data, refresh }) => {
    const { deleting } = DocumentServices();
    const navigate = useNavigate();
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
                field: "document_id",
                headerName: "ID Dokumen",
                width: 150,
            },
            {
                field: "document_judul",
                headerName: "Judul",
                width: 350,
            },
            {
                field: "document_agenda",
                headerName: "Agenda",
                width: 350,
            },
            {
                field: "departemen_name",
                headerName: "Departemen",
                width: 150,
            },
            {
                field: "kategori_name",
                headerName: "Kategori",
                width: 200,
            },
            {
                field: "document_url",
                headerName: "Link Document",
                width: 150,
                renderCell: ({ row: { document_url } }) => {
                    return (
                        <a href={`${document_url}`} target="_blank">
                            <Button
                                componen="label"
                                disableElevation
                                variant="text"
                                sx={{
                                    ...h4FontStyle,
                                }}
                            >
                                Jump
                            </Button>
                        </a>
                    );
                },
            },
            {
                field: "option",
                headerName: "Option",
                width: 150,
                renderCell: ({ row: { id, title, document_id } }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <SiteButton
                                title={"edit"}
                                action={() => navigate(`${document_id}`)}
                            />
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: document_id,
                                    });
                                    refresh();
                                    return;
                                }}
                            />
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

export default ArchiveColumn;
