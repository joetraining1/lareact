import OrderTransaksiForm from "@/Components/Forms/OrderTransaksiForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import TransaksiColumn from "@/Components/TableColumn/TransaksiColumn";
import TableData from "@/Components/TableData/TableData";
import React from "react";

const TransaksiSection = ({ order_id }) => {
    const { DataColumn } = TransaksiColumn({});

    return (
        <SectionPresenter
            title={"Transaksi Purchase Order"}
            desc={"Kelola pengiriman yang dilakukan dalam purchase order."}
        >
            <IndexModal
                button={"Add transaksi"}
                title={`Order: ${order_id}`}
                value={"Menambahkan Transaksi pada order"}
            >
                <br />
                <OrderTransaksiForm />
            </IndexModal>
            <TableData column={DataColumn} rows={[]} />
        </SectionPresenter>
    );
};

export default TransaksiSection;
