import OrderProductForm from "@/Components/Forms/OrderProductForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import ProductColumn from "@/Components/TableColumn/ProductColumn";
import TableData from "@/Components/TableData/TableData";
import SearchField from "@/lib/parts/SearchField/SearchField";
import React from "react";

const ProductSection = ({ order_id }) => {
    const { DataColumn } = ProductColumn({
        addition: [
            {
                field: "jumlah_item",
                headerName: "Jumlah Order",
                width: 150,
            },
        ],
    });

    return (
        <SectionPresenter
            title={"Product Purchase Order"}
            desc={"Kelola product yang dibutuhkan dalam purchase order."}
        >
            <IndexModal
                button={"Add Product"}
                title={`Order:${order_id}`}
                value={"Tambah produk pada order."}
            >
                <OrderProductForm order_id={order_id} />
            </IndexModal>
            <TableData column={DataColumn} rows={[]} />
        </SectionPresenter>
    );
};

export default ProductSection;
