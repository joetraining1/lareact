import DepartemenForm from "@/Components/Forms/DepartemenForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import DepartemenColumn from "@/Components/TableColumn/DepartemenColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Departemen = () => {
    const { DataColumn } = DepartemenColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Departemen Data"}
                    value={"Monitor departemen pada perusahaan."}
                />
                <IndexModal
                    title={"Register New Departemen"}
                    value={"Tambahkan departemen baru"}
                    button={"Add new departemen"}
                >
                    <br />
                    <DepartemenForm />
                </IndexModal>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Departemen"}
                    value={"Kelola keseluruhan data user pada aplikasi."}
                />
                <TableData column={DataColumn} rows={[]} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Departemen;
