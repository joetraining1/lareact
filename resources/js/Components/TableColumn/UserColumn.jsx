import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import UserProfileForm from "../Forms/UserProfileForm";

const UserColumn = ({ data, refresh }) => {
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
                width: 250,
                renderCell: ({
                    row: { id, user_id, nama, kontak, alamat },
                }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <IndexModal
                                button={"edit"}
                                title={`Edit Profile User ${user_id}`}
                                value={"modal opened"}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        width: "450px",
                                        height: "fit-content",
                                        flexDirection: "column",
                                        gap: "10px",
                                    }}
                                >
                                    <UserProfileForm
                                        id={user_id}
                                        refresh={() => refresh()}
                                        addr={alamat}
                                        fone={kontak}
                                        name={nama}
                                    />
                                </div>
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

export default UserColumn;
