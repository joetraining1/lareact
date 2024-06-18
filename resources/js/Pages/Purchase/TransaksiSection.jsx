import OrderTransaksiForm from "@/Components/Forms/OrderTransaksiForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import TransaksiColumn from "@/Components/TableColumn/TransaksiColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import React from "react";

const TransaksiSection = ({ order_id }) => {
    const { isFetching, resp, forceRefresh } = useGetFetch(
        `transaksis/${order_id}`
    );

    const { DataColumn } = TransaksiColumn({
        refresh: () => forceRefresh(),
        order_id: order_id,
    });

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
                <OrderTransaksiForm
                    id={order_id}
                    oId={order_id}
                    refresh={() => forceRefresh()}
                />
            </IndexModal>
            <TableData
                column={DataColumn}
                rows={resp ? resp.data : []}
                loading={isFetching}
            />
        </SectionPresenter>
    );
};

export default TransaksiSection;
