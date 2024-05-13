import SupplierForm from "@/Components/Forms/SupplierForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import SupplierColumn from "@/Components/TableColumn/SupplierColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import SiteButton from "@/lib/parts/SiteButton/SiteButton";
import React from "react";

const Supplier = () => {
    const { DataColumn } = SupplierColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Supplier Data"}
                    value={"Monitor data supplier pada perusahaan."}
                />
                <IndexModal
                    title={"Register New Supplier"}
                    value={"Tambahkan Supplier Baru"}
                    button={"Add new supplier"}
                >
                    <br />
                    <SupplierForm />
                </IndexModal>
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

export default Supplier;
