import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SupplierForm from "../Forms/SupplierForm";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import SupplierServices from "@/lib/services/Supplier/SupplierServices";

const SupplierColumn = ({ data, refresh }) => {
    const { deleting } = SupplierServices();

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
                field: "supplier_id",
                headerName: "ID Supplier",
                width: 150,
            },
            {
                field: "supplier_name",
                headerName: "Nama Supplier",
                width: 250,
            },
            {
                field: "supplier_kontak",
                headerName: "Kontak Supplier",
                width: 250,
            },
            {
                field: "supplier_alamat",
                headerName: "Alamat Supplier",
                width: 250,
            },
            {
                field: "option",
                headerName: "Option",
                width: 250,
                renderCell: ({
                    row: {
                        supplier_id,
                        supplier_name,
                        supplier_kontak,
                        supplier_alamat,
                    },
                }) => {
                    return (
                        <SectionDivider>
                            <IndexModal
                                button={"option"}
                                title={"Test Table Modal"}
                                value={"modal opened"}
                            >
                                <SupplierForm
                                    id={supplier_id}
                                    name={supplier_name}
                                    kontak={supplier_kontak}
                                    alamat={supplier_alamat}
                                    refresh={() => refresh()}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    deleting({
                                        id: supplier_id,
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

export default SupplierColumn;
