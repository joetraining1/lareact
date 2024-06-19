import React, { useMemo } from "react";
import IndexModal from "../Modal/IndexModal";
import ShipmentServices from "@/lib/services/PurchaseOrder/ShipmentServices";
import OrderShipmentForm from "../Forms/OrderShipmentForm";
import { SectionDivider } from "../SectionContainer/SectionContainer";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import DocumentServices from "@/lib/services/Document/DocumentServices";

const ShipmentColumn = ({ data = [], addition = [], refresh, order_id }) => {
    const { deleting: DocDelete } = DocumentServices();
    const { deleting: ShipmentDelete } = ShipmentServices();
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
                renderCell: ({
                    row: {
                        id,
                        shipment_id,
                        shipment_ref,
                        shipment_cost,
                        shipment_start,
                        shipment_estimated,
                        transaksi_id,
                        document_id,
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
                                title={`Edit Shipment ${shipment_id}`}
                                value={"modal opened"}
                            >
                                <OrderShipmentForm
                                    refresh={() => refresh()}
                                    oId={order_id}
                                    arrive={shipment_estimated}
                                    cost={shipment_cost}
                                    dId={document_id}
                                    trId={transaksi_id}
                                    sId={shipment_id}
                                    sRef={shipment_ref}
                                    date={shipment_start}
                                    filename={document_file}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"delete"}
                                action={() => {
                                    DocDelete({
                                        id: document_id,
                                    });
                                    ShipmentDelete({
                                        id: shipment_id,
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

export default ShipmentColumn;
