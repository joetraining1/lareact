import SectionContainer, {
    SectionDivider,
} from "@/Components/SectionContainer/SectionContainer";
import SectionPresenter from "@/Components/SectionPresenter/SectionPresenter";
import ProductColumn from "@/Components/TableColumn/ProductColumn";
import ShipmentColumn from "@/Components/TableColumn/ShipmentColumn";
import TransaksiColumn from "@/Components/TableColumn/TransaksiColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";
import { useParams } from "react-router-dom";

const Progress = () => {
    const { order_id } = useParams();

    const { DataColumn: ItemColumn } = ProductColumn({
        addition: [
            {
                field: "jumlah_item",
                headerName: "Jumlah Order",
                width: 150,
            },
        ],
    });

    const { DataColumn: ShipColumn } = ShipmentColumn({});

    const { DataColumn: DealColumn } = TransaksiColumn({});

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
            <SectionPresenter
                title={"Product Purchase Order"}
                kontex={"product"}
                desc={"Kelola product yang dibutuhkan dalam purchase order."}
            >
                <TableData column={ItemColumn} rows={[]} />
            </SectionPresenter>
            <SectionPresenter
                title={"Transaksi Purchase Order"}
                kontex={"transaksi"}
                desc={"Kelola transaksi yang dilakukan dalam purchase order."}
            >
                <TableData column={DealColumn} rows={[]} />
            </SectionPresenter>
            <SectionPresenter
                title={"Shipment Purchase Order"}
                kontex={"shipment"}
                desc={"Kelola pengiriman yang dilakukan dalam purchase order."}
            >
                <TableData column={ShipColumn} rows={[]} />
            </SectionPresenter>
        </SectionContainer>
    );
};

export default Progress;
