import KategoriForm from "@/Components/Forms/KategoriForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import KategoriColumn from "@/Components/TableColumn/KategoriColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Kategori = () => {
    const { DataColumn } = KategoriColumn();
    const { current, isError, resp } = useGetFetch("kategoris");

    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Kategori Data"}
                    value={"Monitor data kategori pada perusahaan."}
                />
                <IndexModal
                    title={"Register New Kategori"}
                    value={"Tambahkan kategori baru"}
                    button={"Add new Kategori"}
                >
                    <br />
                    <KategoriForm />
                </IndexModal>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Kategori Data"}
                    value={"Kelola keseluruhan kategori data pada aplikasi."}
                />
                <TableData column={DataColumn} rows={resp ? resp.data : []} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Kategori;
