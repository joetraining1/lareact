import SectionContainer, {
    SectionDivider,
} from "@/Components/SectionContainer/SectionContainer";
import ShipmentColumn from "@/Components/TableColumn/ShipmentColumn";
import TransaksiColumn from "@/Components/TableColumn/TransaksiColumn";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useParams } from "react-router-dom";
import ProductSection from "./ProductSection";
import TransaksiSection from "./TransaksiSection";
import ShipmentSection from "./ShipmentSection";

const Progress = () => {
    const { order_id } = useParams();

    return (
        <SectionContainer url={"/purchase"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Purchase Order"}
                    value={`Kelola kemajuan proses Order: ${order_id}.`}
                />
                <SectionDivider>
                    <SiteButton
                        title={"Simpan"}
                        styles={{
                            width: "150px",
                        }}
                    />
                </SectionDivider>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader title={"DFD"} />
                <ul>
                    <li>1. Order had items</li>
                    <li>2. Order had transaction</li>
                    <li>3. transaction includes supplier, order</li>
                    <li>4. shipment includes transaction</li>
                </ul>
            </BoxContainer>
            <ProductSection order_id={order_id} />
            <TransaksiSection order_id={order_id} />
            <ShipmentSection order_id={order_id} />
        </SectionContainer>
    );
};

export default Progress;
