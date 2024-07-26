import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import OrderTransaksiForm from "../Forms/OrderTransaksiForm";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import TransaksiServices from "@/lib/services/PurchaseOrder/TransaksiServices";
import DocumentServices from "@/lib/services/Document/DocumentServices";
import DocumentInfoServices from "@/lib/services/Document/DocumentInfoServices";
import { Rupiah } from "@/lib/utils/IntoCurrency";
import { Typography } from "@mui/material";

const TransaksiColumn = ({ data = [], addition = [], refresh, order_id }) => {
    const { deleting: TransaksiDelete } = TransaksiServices();
    const { deleting: DocDelete } = DocumentServices();

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
            ...addition,
            {
                field: "transaksi_id",
                headerName: "ID Transaksi",
                width: 150,
            },
            {
                field: "document_id",
                headerName: "Dokumen",
                width: 150,
            },
            {
                field: "supplier_name",
                headerName: "Supplier",
                width: 250,
            },
            {
                field: "transaksi_cost",
                headerName: "Biaya Transaksi",
                width: 250,
                renderCell: ({ row: { transaksi_cost } }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <Typography>{`${Rupiah(
                                parseInt(transaksi_cost)
                            )}`}</Typography>
                        </SectionDivider>
                    );
                },
            },
            {
                field: "transaksi_date",
                headerName: "Tanggal Transaksi",
                width: 250,
            },
            {
                field: "option",
                headerName: "Option",
                width: 250,
                renderCell: ({
                    row: {
                        id,
                        title,
                        transaksi_id,
                        transaksi_ref,
                        transaksi_cost,
                        transaksi_date,
                        document_id,
                        supplier_id,
                        document_file,
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
                                title={`Edit Transaksi ${transaksi_id}`}
                                value={"modal opened"}
                            >
                                <OrderTransaksiForm
                                    refresh={() => refresh()}
                                    trId={transaksi_id}
                                    trRef={transaksi_ref}
                                    id={order_id}
                                    oId={order_id}
                                    cost={transaksi_cost}
                                    date={transaksi_date}
                                    dId={document_id}
                                    sId={supplier_id}
                                    filename={document_file}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    DocDelete({
                                        id: document_id,
                                    });
                                    TransaksiDelete({
                                        id: transaksi_id,
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

export default TransaksiColumn;
