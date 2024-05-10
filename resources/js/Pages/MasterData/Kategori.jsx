import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import KategoriColumn from "@/Components/TableColumn/KategoriColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Kategori = () => {
    const { DataColumn } = KategoriColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Kategori Data"}
                    value={"Monitor data kategori pada perusahaan."}
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

export default Kategori;
