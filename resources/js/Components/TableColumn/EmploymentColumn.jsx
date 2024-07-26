import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import UserEmployment from "@/lib/services/User/UserEmployment";
import EmploymentForm from "../Forms/EmploymentForm";

const EmploymentColumn = ({ data, refresh }) => {
    const { deleting } = UserEmployment();
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
                field: "departemen_name",
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
                width: 250,
                renderCell: ({
                    row: {
                        id,
                        user_id,
                        departemen_name,
                        nama,
                        departemen_id,
                        posisi,
                        jabatan,
                    },
                }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <IndexModal
                                button={"edit"}
                                title={"Edit Hubungan Pekerjaan"}
                                value={`Pegawai : ${user_id}`}
                            >
                                <EmploymentForm
                                    id={user_id}
                                    refresh={() => refresh()}
                                    dId={departemen_id}
                                    dept={departemen_name}
                                    name={nama}
                                    rank={jabatan}
                                    role={posisi}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: user_id,
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

export default EmploymentColumn;
