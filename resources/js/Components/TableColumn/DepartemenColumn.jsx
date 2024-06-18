import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import DepartemenServices from "@/lib/services/Departemen/DepartemenServices";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import DepartemenForm from "../Forms/DepartemenForm";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";

const DepartemenColumn = ({ data, refresh }) => {
    const { deleting } = DepartemenServices();
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
                field: "departemen_id",
                headerName: "ID Departemen",
                width: 150,
            },
            {
                field: "departemen_name",
                headerName: "Nama Departemen",
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
                width: 250,
                renderCell: ({
                    row: { departemen_id, departemen_name, lokasi },
                }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <IndexModal
                                button={"option"}
                                title={`Edit Departemen ${departemen_name}`}
                                value={"modal opened"}
                            >
                                <DepartemenForm
                                    id={departemen_id}
                                    name={departemen_name}
                                    lokasi={lokasi}
                                    refresh={() => refresh()}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: departemen_id,
                                    });
                                    refresh();
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

export default DepartemenColumn;
