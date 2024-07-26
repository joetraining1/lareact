import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductSection from "./ProductSection";
import TransaksiSection from "./TransaksiSection";
import ShipmentSection from "./ShipmentSection";
import ProductForm from "@/Components/Forms/ProductForm";
import OrderServices from "@/lib/services/PurchaseOrder/OrderServices";

const Progress = () => {
    const { order_id } = useParams();
    const [order, setOrder] = useState();

    const { retrieving } = OrderServices();

    const fetch = async (id) => {
        retrieving({
            id: id,
        }).then((res) => {
            setOrder(res.data);
            return;
        });

        return;
    };

    if (order_id && !order) {
        fetch(order_id);
    }

    return (
        <SectionContainer url={"/purchase"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Purchase Order"}
                    value={`Kelola kemajuan proses Order: ${order_id}.`}
                />
                {order && (
                    <ProductForm
                        id={order_id}
                        dId={order.departemen_id}
                        req={order.requester}
                        agenda={order.purpose}
                        cost={order.expense}
                        proposer={order.proposer}
                        dept={order.departemen_name}
                    />
                )}
            </BoxContainer>

            <ProductSection order_id={order_id} />
            <TransaksiSection order_id={order_id} />
            <ShipmentSection order_id={order_id} />
        </SectionContainer>
    );
};

export default Progress;
