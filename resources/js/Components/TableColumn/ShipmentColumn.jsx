import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import ShipmentServices from "@/lib/services/PurchaseOrder/ShipmentServices";
import OrderShipmentForm from "../Forms/OrderShipmentForm";

const ShipmentColumn = ({ data = [], addition = [], refresh, order_id }) => {
    const {} = ShipmentServices();
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
                field: "shipment_id",
                headerName: "ID Shipping",
                width: 150,
            },
            {
                field: "transaksi_id",
                headerName: "ID Transaksi",
                width: 150,
            },
            {
                field: "document_id",
                headerName: "ID Dokumen",
                width: 150,
            },
            {
                field: "shipment_ref",
                headerName: "No. Referensi",
                width: 250,
            },
            {
                field: "shipment_cost",
                headerName: "Biaya Pengiriman",
                width: 250,
            },
            {
                field: "shipment_start",
                headerName: "Tanggal Pengiriman",
                width: 250,
            },
            {
                field: "shipment_estimated",
                headerName: "Tanggal Estimasi",
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
                            <OrderShipmentForm
                                refresh={() => refresh()}
                                oId={order_id}
                            />
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

export default ShipmentColumn;
