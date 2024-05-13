import OrderShipmentForm from "@/Components/Forms/OrderShipmentForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import ShipmentColumn from "@/Components/TableColumn/ShipmentColumn";
import TableData from "@/Components/TableData/TableData";
import React from "react";

const ShipmentSection = ({ order_id }) => {
    const { DataColumn } = ShipmentColumn({});

    return (
        <SectionPresenter
            title={"Shipment Purchase Order"}
            desc={"Kelola transaksi yang dilakukan dalam purchase order."}
        >
            <IndexModal
                button={"Add shipment"}
                title={`Order: ${order_id}`}
                value={"Menambahkan shipment pengiriman pada order"}
            >
                <br />
                <OrderShipmentForm />
            </IndexModal>
            <TableData column={DataColumn} rows={[]} />
        </SectionPresenter>
    );
};

export default ShipmentSection;
