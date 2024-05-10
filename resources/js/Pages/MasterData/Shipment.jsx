import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import ShipmentColumn from "@/Components/TableColumn/ShipmentColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Shipment = () => {
    const { DataColumn } = ShipmentColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Data Shipment"}
                    value={"Monitor data pengiriman pada perusahaan."}
                />
                <SiteButton
                    title={"Simpan"}
                    styles={{
                        width: "150px",
                    }}
                />
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Transaksi Pengiriman"}
                    value={
                        "Kelola keseluruhan data pengiriman pada perusahaan."
                    }
                />
                <TableData column={DataColumn} rows={[]} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Shipment;
