import EmploymentForm from "@/Components/Forms/EmploymentForm";
import IndexModal from "@/Components/Modal/IndexModal";
import SectionContainer from "@/Components/SectionContainer/SectionContainer";
import EmploymentColumn from "@/Components/TableColumn/EmploymentColumn";
import TableData from "@/Components/TableData/TableData";
import useGetFetch from "@/hooks/useGetFetch";
import SectionHeader, {
    BoxContainer,
} from "@/lib/parts/SectionHeader/SectionHeader";
import React from "react";

const Employment = () => {
    const { resp, forceRefresh, isFetching } = useGetFetch(
        "account/employments"
    );

    const { DataColumn } = EmploymentColumn({
        refresh: () => forceRefresh(),
    });
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
                    <EmploymentForm refresh={() => forceRefresh()} />
                </IndexModal>
            </BoxContainer>
            <BoxContainer>
                <SectionHeader
                    title={"Data Employment"}
                    value={
                        "Kelola keseluruhan data hubungan kerja pegawai di perusahaan."
                    }
                />
                <TableData column={DataColumn} rows={resp ? resp.data : []} />
            </BoxContainer>
        </SectionContainer>
    );
};

export default Employment;
