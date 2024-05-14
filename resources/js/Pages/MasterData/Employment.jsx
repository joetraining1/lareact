import EmploymentForm from "@/Components/Forms/EmploymentForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import EmploymentColumn from "@/Components/TableColumn/EmploymentColumn";
import TableData from "@/Components/TableData/TableData";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";

const Employment = () => {
    const { DataColumn } = EmploymentColumn();
    return (
        <SectionContainer url={"/master"}>
            <BoxContainer>
                <SectionHeader
                    title={"Manage Employment Data"}
                    value={
                        "Monitor status kepekerjaan pegawai pada perusahaan."
                    }
                />
                <IndexModal
                    title={"Register New Employment"}
                    value={"Tambahkan status pekerja baru"}
                    button={"Add new employment"}
                >
                    <br />
                    <EmploymentForm />
                </IndexModal>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Employment"}
                    value={
                        "Kelola keseluruhan data hubungan kerja pegawai di perusahaan."
                    }
                />
                <TableData column={DataColumn} rows={[]} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Employment;
