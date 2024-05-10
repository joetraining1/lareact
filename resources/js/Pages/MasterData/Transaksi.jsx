import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import TransaksiColumn from "@/Components/TableColumn/TransaksiColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Transaksi = () => {
    const { DataColumn } = TransaksiColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Data Transaksi"}
                    value={"Monitor data transaksi pembayaran pada perusahaan."}
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
                    title={"Data User Aplikasi"}
                    value={"Kelola keseluruhan data user pada aplikasi."}
                />
                <TableData column={DataColumn} rows={[]} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Transaksi;
