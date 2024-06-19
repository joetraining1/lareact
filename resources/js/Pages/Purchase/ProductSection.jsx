import OrderProductForm from "@/Components/Forms/OrderProductForm";
import IndexModal from "@/Components/Modal/IndexModal";
import { SectionDivider } from "@/Components/SectionContainer/SectionContainer";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import ProductColumn from "@/Components/TableColumn/ProductColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import SearchField from "@/lib/parts/SearchField/SearchField";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import OrderItemServices from "@/lib/services/PurchaseOrder/OrderItemServices";
import React from "react";

const ProductSection = ({ order_id }) => {
    const { resp, isFetching, forceRefresh } = useGetFetch(
        `order/items/${order_id}`
    );

    const { deleting } = OrderItemServices();

    const { DataColumn } = ProductColumn({
        addition: [
            {
                field: "order_qty",
                headerName: "Jumlah Order",
                width: 150,
            },
        ],
        option: [
            {
                field: "option",
                headerName: "Option",
                width: 250,
                renderCell: ({
                    row: {
                        product_id,
                        id,
                        order_qty,
                        order_cost,
                        product_name,
                    },
                }) => {
                    return (
                        <SectionDivider
                            styles={{
                                alignItems: "center",
                            }}
                        >
                            <IndexModal
                                button={"Edit"}
                                title={`Order:${order_id}`}
                                value={"Edit produk pada order."}
                            >
                                <OrderProductForm
                                    order_id={order_id}
                                    refresh={() => forceRefresh()}
                                    pId={product_id}
                                    id={id}
                                    qty={order_qty}
                                    cost={order_cost}
                                    pName={product_name}
                                />
                            </IndexModal>
                            <SiteButton
                                title={"Delete"}
                                action={() => {
                                    deleting({
                                        id: id,
                                    });
                                    forceRefresh();
                                    return;
                                }}
                            />
                        </SectionDivider>
                    );
                },
            },
        ],
        order_id: order_id,
        refresh: () => forceRefresh(),
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
            <TableData
                column={DataColumn}
                rows={resp ? resp.data : []}
                loading={isFetching}
            />
        </SectionPresenter>
    );
};

export default ProductSection;
